import { objectReduce, firstToLower } from '../util'

const getLevelData = (definition, level) => (
  definition.levels ? definition.levels[level] : {}
)

const defaultBuilder = (factory, data, dataForInject) => (
  factory({ data, ...dataForInject })
)

export default class EntityManager {
  defs = {}

  factories = {}

  builder = defaultBuilder

  constructor(factories = {}, definitions = {}, builder = defaultBuilder) {
    this.setDefinitions(definitions)
    this.setFactories(factories)

    this.builder = builder
  }

  create(id, data = {}, dataForInject = {}, builder) {
    const entityData = this.makeEntityData(id, data)
    return this.buildEntity(id, entityData, dataForInject, builder)
  }

  buildEntity(id, data = {}, dataForInject = {}, builder) {
    if (!id) {
      throw new Error('Your must provide id param')
    }

    const entityBuilder = builder || this.builder
    const factory = this.getFactory(id)

    return entityBuilder(factory, data, dataForInject)
  }

  makeEntityData(id, params) {
    const {
      level = null,
      def = id,
    } = params

    const definition = this.getDefinition(def)
    const levelData = getLevelData(definition, level)
    const data = { ...params, id, level, def }

    return {
      ...definition,
      ...levelData,
      ...data,
    }
  }

  getDefinition(id) {
    const def = this.defs[id]

    if (!def) {
      const keysStr = Object.keys(this.defs).join(', ')
      throw new Error(`Could not find entity definition for '${id}', available: ${keysStr}`)
    }

    return def
  }

  getFactory(id) {
    const factory = this.factories[id]

    if (!factory) {
      const keysStr = Object.keys(this.factories).join(', ')
      throw new Error(`Could not find entity factory for '${id}', available: ${keysStr}`)
    }

    return factory
  }

  setDefinitions(defs) {
    this.defs = defs || {}
  }

  setFactories(factories) {
    this.factories = objectReduce((acc, key, val) => ({
      ...acc,
      [firstToLower(key)]: val,
    }), factories || {})
  }

  getAllDefinitions() {
    return this.defs
  }

  getAllFactories() {
    return this.factories
  }
}