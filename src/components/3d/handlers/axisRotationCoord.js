const PI = Math.PI;

export default function axisRotationCord(vector, angleX, angleY, angleZ) {
  //!xyz rotation
  const [X, Y, Z] = [vector[0], vector[1], vector[2]];
  const radX = (PI * angleX) / 180,
    radY = (PI * angleY) / 180,
    radZ = (PI * angleZ) / 180,
    sinX = Math.sin(radX),
    sinY = Math.sin(radY),
    sinZ = Math.sin(radZ),
    cosX = Math.cos(radX),
    cosY = Math.cos(radY),
    cosZ = Math.cos(radZ);
  let nX = X * cosY * cosZ - Y * cosY * sinZ + Z * sinY,
    nY = X * (sinX * sinY * cosZ + cosX * sinZ) + Y * (cosX * cosZ - sinX * sinY * sinZ) - Z * sinX * cosY,
    nZ = X * (sinX * sinZ - cosX * sinY * cosZ) + Y * (cosX * sinY * sinZ + sinX * cosZ) + cosX * cosY * Z;

  return [nX, nY, nZ];
}
/*               const [x, y, z] = [coord[0], coord[1], coord[2]]; */
/*           const newX = x, //!x rotation
              newY = y * cos - z * sin,
              newZ = y * sin + z * cos; */
/* const newX = x * cos + z * sin, //!y rotation
              newY = y,
              newZ = z * cos - x * sin; */
/*               const newX = x * cos - y * sin, //!z rotation
                newY = x * sin + y * cos,
                newZ = z; */
/*           const newX = x * cos + z * sin, //!xy rotation
              newY = x * sin * sin + y * cos - z * sin * cos,
              newZ = -x * cos * sin + y * sin + z * cos * cos; */
/*               return [newX, newY, newZ]; */
