import { useEffect } from 'react';
import toVectors from './handlers/toVectors';
import { cubeCord } from './constants/cubeCord';
import colors from './constants/colors';
import init, { drawCube } from './threejsMethods/treeInit';
import axisRotationCord from './handlers/axisRotationCoord';
import arbitratyAxsisRotationCord from './handlers/arbitraryAxisrotationCord';

export default function C3D() {
  useEffect(() => {
    return () => {
      init();
      let currentCubeFaces = [];
      let rad = 0;
      let cubeRotation = () => {
        for (; rad < 360; rad = rad + 1) {
          const newCubeCoord = axisRotationCord(cubeCord, rad, rad, 0); //!XYZ rotation
          /*  return arbitratyAxsisRotationCord(coord, [100, 100, 100], rad); */

          setTimeout(() => {
            currentCubeFaces = drawCube(currentCubeFaces, toVectors(newCubeCoord), colors);
          }, rad * 50);
        }
        setTimeout(() => {
          rad = 0;
          cubeRotation();
        }, rad * 50);
      };
      cubeRotation();
    };
  });
  return <></>;
}
