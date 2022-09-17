import * as THREE from 'three';

const axes = {
  oX: [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(100, 0, 0),
    new THREE.Vector3(95, 5, 0),
    new THREE.Vector3(95, 5, 5),
    new THREE.Vector3(95, 0, 5),
    new THREE.Vector3(95, 5, 0)
  ],
  oY: [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 100, 0),
    new THREE.Vector3(5, 95, 0),
    new THREE.Vector3(5, 95, 5),
    new THREE.Vector3(0, 95, 5),
    new THREE.Vector3(5, 95, 0)
  ],
  oZ: [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 100),
    new THREE.Vector3(5, 0, 95),
    new THREE.Vector3(5, 5, 95),
    new THREE.Vector3(0, 5, 95),
    new THREE.Vector3(5, 0, 95)
  ]
};

export default function setOxOyOz(scene) {
  const materialoX = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 3 });
  const geometryoX = new THREE.BufferGeometry().setFromPoints(axes.oX);
  const oX = new THREE.Line(geometryoX, materialoX);
  scene.add(oX);
  const materialoY = new THREE.LineBasicMaterial({ color: 0x1000ff, linewidth: 3 });
  const geometryoY = new THREE.BufferGeometry().setFromPoints(axes.oY);
  const oY = new THREE.Line(geometryoY, materialoY);
  scene.add(oY);
  const materialoZ = new THREE.LineBasicMaterial({ color: 0x9900ff, linewidth: 3 });
  const geometryoZ = new THREE.BufferGeometry().setFromPoints(axes.oZ);
  const oZ = new THREE.Line(geometryoZ, materialoZ);
  scene.add(oZ);
}
