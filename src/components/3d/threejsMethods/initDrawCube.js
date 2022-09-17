import * as THREE from 'three';

export function initDrawCube(scene, camera, renderer) {
  return function drawCube(cubeFaces, colors) {
    let currentFaces = [];
    cubeFaces.forEach((vectors, i) => {
      const material = new THREE.LineBasicMaterial({ color: colors[i], linewidth: 3 });
      const geometry = new THREE.BufferGeometry().setFromPoints(vectors);
      const face = new THREE.Line(geometry, material);
      currentFaces.push(face);
      scene.add(face);
    });
    renderer.render(scene, camera);
    return currentFaces;
  };
}
