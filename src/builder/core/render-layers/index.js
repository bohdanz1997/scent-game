export const sortingStrategy = {
  // sprites with greater 'y' go backward
  backward: sprite => sprite.zOrder = +sprite.y + sprite.z,
  // sprites with greater 'y' go forward
  forward: sprite => sprite.zOrder = -sprite.y,
}
