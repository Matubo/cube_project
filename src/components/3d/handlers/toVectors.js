import * as THREE from 'three';

export default (coordArr) => {
  return coordArr.map((coords) => {
    return coords.map((elem) => {
      return new THREE.Vector3(elem[0], elem[1], elem[2]);
    });
  });
};
