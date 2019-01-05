import * as c from '../components'

// control
export const CameraControl = [
  c.Camera,
  c.Position,
  c.Motion,
  c.MotionControl,
  c.ZoomControl,
]

export const Draggable = [
  c.Draggable,
  c.Position,
  c.Display,
  c.Collision,
  c.Identity,
]

export const Movement = [c.Position, c.Motion]
export const Isometric = [c.Position, c.IsoPosition]

export const Collision = [c.Position, c.Collision]
export const Render = [c.Position, c.Display]
export const Map = [c.Map]
export const Building = [c.Building, c.Position, c.Identity]
export const Keyboard = [c.Keyboard]
export const IsoRender = [c.IsoPosition, c.Display]
export const OverlayOwner = [c.OverlayOwner, c.Position]
export const Overlay = [c.Overlay, c.Position]
export const Hud = [c.HudLayer, c.Display]
export const Deck = [c.Deck]
export const DeckItem = [c.DeckItem, c.Interactive, c.EntityMeta]
export const Animation = [c.Animatable, c.Display]

export const Pointer = [c.PointerContext, c.Position, c.IsoPosition]
export const Interactive = [c.Interactive, c.Collision, c.Identity]

export const Client = [c.PointerContext, c.Idle, c.Position, c.IsoPosition]
export const Source = [c.Interactive, c.Idle, c.Collision]

// observers
export const Observer = [c.Interact.Client, c.Interact.Source]
export const HoverObserver = [c.Hovered, c.Interact.Client, c.Interact.Source]
export const DragObserver = [c.Dragging, c.DragContext, c.Interact.Client, c.Interact.Source]
export const DropObserver = [c.Dropped, c.DragContext, c.Interact.Client, c.Interact.Source]

export const Tween = [c.Tween]

// layers
export const Layers = {
  Ground: [c.GroundLayer, c.Display],
  BackGround: [c.BackGroundLayer, c.Display],
  Building: [c.BuildingLayer, c.Display],
  Drag: [c.DragLayer, c.Display],
  Hud: [c.HudLayer, c.Display],
}

// map layers
export const MapLayers = {
  Building: [c.BuildingLayer, c.Identity, c.Position, c.Collision],
  Drag: [c.DragLayer, c.Identity, c.Position, c.Collision],
}
