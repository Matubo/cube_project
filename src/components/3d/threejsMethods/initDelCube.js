export function initDelCube(scene) {
  return function delCube(currentFaces) {
    for (var i = 0; i < currentFaces.length; i++) {
      scene.remove(currentFaces[i]);
      currentFaces[i].geometry.dispose();
      currentFaces[i].material.dispose();
    }
  };
}
