export default function drawSquare(vertArr: number[][], context: CanvasRenderingContext2D) {
  context.moveTo(vertArr[0][0], vertArr[0][1]);
  for (let i = 1; i < vertArr.length; i++) {
    context.lineTo(vertArr[i][0], vertArr[i][1]);
  }
  context.lineTo(vertArr[0][0], vertArr[0][1]);
  context.stroke();
}
