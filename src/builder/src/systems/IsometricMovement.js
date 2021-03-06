import { useNodes, onUpdate } from 'core/ecs'
import { MatrixHelper } from 'core/math'
import * as n from '../nodes'

export const IsometricMovement = () => {
  useNodes([n.Isometric])

  /**
   * @param {Isometric} node
   */
  onUpdate((node) => {
    const { position, isoPosition } = node

    // iso pos for entities
    const tempIsoPos = {
      x: position.x - position.offset.x,
      y: position.y - position.offset.y,
    }

    const isoPos = MatrixHelper.isoMatrix.apply(tempIsoPos)
    isoPosition.x = isoPos.x
    isoPosition.y = isoPos.y
  })
}
