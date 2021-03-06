import { filters } from 'pixi.js'
import { createEntity } from 'core/ecs'
import { View } from 'core/display'
import * as c from '../components'
import { Overlay } from './overlay'

export const Preview = ({
  data: { id, def, x, y, offsetX, offsetY, size },
  map,
  entities,
}) => {
  const alpha = 0.5
  const overlay = entities.create(Overlay, { x, y, size, alpha })
  const sprite = View.sprite(def, {
    filters: [new filters.AlphaFilter(alpha)],
  })

  return createEntity(
    c.Layer.Drag(),
    c.Preview(),
    c.Child.Overlay(overlay),
    c.Position({ x, y, offsetX, offsetY }),
    c.IsoPosition(),
    c.Collision({
      width: map.config.tileWidth,
      height: map.config.tileHeight,
      size,
    }),
    c.Display(sprite),
  )
}
