export default function drawCube(vertArr: number[][], context: CanvasRenderingContext2D) {
  const r = 1 / 500,
    offset = 300;
  const newVertArr = vertArr.map((elem) => {
    const [x, y, z] = [elem[0], elem[1], elem[2]];
    const newX = x / (r * z + 1);
    const newY = y / (r * z - 1);
    return [newX + offset, newY + offset];
  });
  console.log(newVertArr);
  context.moveTo(newVertArr[0][0], newVertArr[0][1]);
  context.lineTo(newVertArr[1][0], newVertArr[1][1]);
  context.lineTo(newVertArr[2][0], newVertArr[2][1]);
  context.lineTo(newVertArr[3][0], newVertArr[3][1]);
  context.lineTo(newVertArr[0][0], newVertArr[0][1]);
  context.strokeStyle = 'rgb(0,0,255)';
  context.stroke();
  context.beginPath();
  context.moveTo(newVertArr[7][0], newVertArr[7][1]);
  context.lineTo(newVertArr[6][0], newVertArr[6][1]);
  context.lineTo(newVertArr[5][0], newVertArr[5][1]);
  context.lineTo(newVertArr[4][0], newVertArr[4][1]);
  context.lineTo(newVertArr[7][0], newVertArr[7][1]);
  context.strokeStyle = 'rgb(0,255,0)';
  context.stroke();
  context.beginPath();
  context.moveTo(newVertArr[0][0], newVertArr[0][1]);
  context.lineTo(newVertArr[7][0], newVertArr[7][1]);
  context.moveTo(newVertArr[1][0], newVertArr[1][1]);
  context.lineTo(newVertArr[6][0], newVertArr[6][1]);
  context.moveTo(newVertArr[2][0], newVertArr[2][1]);
  context.lineTo(newVertArr[5][0], newVertArr[5][1]);
  context.moveTo(newVertArr[3][0], newVertArr[3][1]);
  context.lineTo(newVertArr[4][0], newVertArr[4][1]);
  context.strokeStyle = 'rgb(255,0,0)';
  context.stroke();
}
