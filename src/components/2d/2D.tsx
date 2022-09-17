import { useEffect, useRef } from 'react';
import drawCube from './handlers/drawCube';
import drawSquare from './handlers/drawSquare';
import setOxOy from './handlers/setOxOy';

export default function C2D() {
  const ref = useRef<HTMLCanvasElement>();

  /*   useEffect(() => {    //!!square
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    setOxOy(context);
    const vertSquareArr = [
        [100, 100],
        [200, 100],
        [200, 200],
        [100, 200]
      ],
      offset = 300;
    for (let rad = 0; rad < 6.28; rad = rad + 0.1) {
      context.clearRect(10, 10, 300, 300);
      const cos = Math.cos(rad),
        sin = Math.sin(rad);
      const newVertSquareArr = vertSquareArr.map((elem) => {
        const [x, y] = [elem[0], elem[1]];
        const newX = x * cos - y * sin,
          newY = x * sin + y * cos;
        return [offset + newX, offset + newY];
      });
      setTimeout(() => {
        drawSquare(newVertSquareArr, context);
      }, rad * 100);
    }
  }, []); */

  useEffect(() => {
    //!cube
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    /* setOxOy(context); */

    const cubeVertArr = [
      [100, 100, 100],
      [100, 200, 100],
      [200, 200, 100],
      [200, 100, 100],
      [200, 100, 200],
      [200, 200, 200],
      [100, 200, 200],
      [100, 100, 200]
    ];

    for (let rad = 0; rad < 6.28; rad = rad + 0.1) {
      const cos = Math.cos(rad),
        sin = Math.sin(rad);
      const newCubeVertArr = cubeVertArr.map((elem) => {
        const [x, y, z] = [elem[0], elem[1], elem[2]];
        /* const newX = x, //!x rotation
          newY = y * cos - z * sin,
          newZ = y * sin - z * cos; */
        const newX = x * cos - y * sin, //!z rotation
          newY = x * sin + y * cos,
          newZ = z;
        /*         const newX = x * cos + z * sin, //!xy rotation
          newY = x * sin * sin + y * cos - z * sin * cos,
          newZ = -x * cos * sin + y * sin + z * cos * cos;*/
        return [newX, newY, newZ];
      });
      console.log(newCubeVertArr);
      setTimeout(() => {
        context.clearRect(0, 0, 1000, 1000);
        drawCube(newCubeVertArr, context);
      }, rad * 1000);
    }
  });

  return <canvas ref={ref} height={800} width={800}></canvas>;
}
