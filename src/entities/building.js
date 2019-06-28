import { createEntity } from 'core/ecs'
import { View } from 'core/display'
import * as c from '../components'
import { Overlay } from './overlay'

export const Building = ({
  data: { id, def, x, y, offsetX, offsetY, radius },
  map,
  entities,
}) => {
  const overlay = entities.create(Overlay, { x, y, radius })
  return createEntity(
    c.Layer.Building(),
    c.Building(),
    c.Draggable(),
    c.Interactive(),
    c.Child.Overlay(overlay),
    c.Position({ x, y, offsetX, offsetY }),
    c.Motion(), // to update col, row
    c.IsoPosition(),
    c.Collision({
      width: map.config.tileWidth,
      height: map.config.tileHeight,
      radius,
    }),
    c.Display(View.sprite(def)),
    ({ entity }) => c.FSM(entity),
  )
}
