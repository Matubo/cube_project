import * as THREE from 'three';
import setOxOyOz from './setOxOyOz';
import { initDrawCube } from './initDrawCube';
import { initDelCube } from './initDelCube';

let drawCube;

export default function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(-75, -75, -575);
  camera.lookAt(37, 37, 0);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const drawCubeMethod = initDrawCube(scene, camera, renderer);
  const delCubeMethod = initDelCube(scene);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  setOxOyOz(scene);
  renderer.render(scene, camera);

  drawCube = (currentFaces, newFacesVectors, colors) => {
    delCubeMethod(currentFaces);
    return drawCubeMethod(newFacesVectors, colors);
  };
}

export { drawCube };
