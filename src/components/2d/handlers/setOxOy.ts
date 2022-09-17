export default function setOxOy(context: CanvasRenderingContext2D) {
  context.moveTo(0, 0);
  context.lineTo(0, 100);
  context.lineTo(5, 95);
  context.moveTo(0, 0);
  context.lineTo(100, 0);
  context.lineTo(95, 5);
  context.stroke();
}
