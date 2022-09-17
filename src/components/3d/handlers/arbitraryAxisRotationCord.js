const PI = Math.PI;

export default function arbitratyAxsisRotationCord(coord, rotationVector, angle) {
  const rad = (PI * angle) / 180,
    sin = Math.sin(rad),
    cos = Math.cos(rad),
    vectorModule = Math.sqrt(
      Math.pow(rotationVector[0], 2) + Math.pow(rotationVector[1], 2) + Math.pow(rotationVector[2], 2)
    ),
    [i, j, q] = [rotationVector[0] / vectorModule, rotationVector[1] / vectorModule, rotationVector[2] / vectorModule],
    [X, Y, Z] = [coord[0], coord[1], coord[2]],
    nX = 2 * X * cos - X - q * Y * sin + j * Z * sin + i * (j * Y + q * Z - j * Y * cos - q * Z * cos),
    nY =
      q * X * sin +
      Y * cos +
      Math.pow(j, 2) * Y -
      Math.pow(j, 2) * Y * cos +
      j * q * Z -
      j * q * Z * cos +
      i * (-Z * sin + j * X - j * X * cos),
    nZ =
      -j * X * sin +
      j * q * Y -
      j * q * Y * cos +
      Z * cos +
      Math.pow(q, 2) * Z -
      Math.pow(q, 2) * Z * cos +
      i * (Y * sin + q * X - q * X * cos);
  console.log(i, j, q, X, Y, Z, nX, nY, nZ);
  return [nX, nY, nZ];
}
