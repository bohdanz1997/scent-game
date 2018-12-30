import { Rectangle } from 'core/pixi'
import * as n from '../nodes'

export default ({ map }) => ({
  nodes: [n.Collision],

  init() {
    this.worldBounds = new Rectangle(0, 0, map.config.widthInPixels, map.config.heightInPixels)
  },

  update({ position, collision }) {
    const { bounds } = collision

    if (bounds.top < this.worldBounds.top) {
      position.pos.y = 0
    }
    if (bounds.bottom > this.worldBounds.bottom) {
      position.pos.y = this.worldBounds.bottom - bounds.height
    }
    if (bounds.left < this.worldBounds.left) {
      position.pos.x = 0
    }
    if (bounds.right > this.worldBounds.right) {
      position.pos.x = this.worldBounds.right - bounds.width
    }
  },
})