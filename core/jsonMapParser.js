const getEntityDefinition = (definitions, id) => {
  const entityDefinition = definitions[id]
  if (!entityDefinition) {
    throw new Error(`Could not find entity definition for '${id}'`)
  }
  return entityDefinition
}

const getLevelDefinition = (entityDefinition, level) => (
  entityDefinition.levels
    ? entityDefinition.levels[level]
    : {}
)

export default ({ entityDefinitions }) => ({
  parseMapDefinition(entityData) {
    const { layers, id } = entityData
    const layerNames = layers.map(l => l.name)
    const entityDefinition = getEntityDefinition(entityDefinitions, id)

    return {
      ...entityDefinition,
      ...entityData,
      layers: layerNames,
    }
  },

  parseLayer(layerData) {
    const makeEntityParams = (entityData) => {
      const { level, id } = entityData

      const entityDefinition = getEntityDefinition(entityDefinitions, id)
      const levelDefinition = getLevelDefinition(entityDefinition, level)

      return {
        ...entityDefinition,
        ...levelDefinition,
        ...entityData,
      }
    }
    return layerData.map(makeEntityParams)
  },
})