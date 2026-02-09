// ================================
// 1) Triangle Area
// ================================
function triangleArea(base, height) {
  return (Number(base) * Number(height)) / 2;
}

// Tests
let t1 = triangleArea(3, 4);
let t2 = triangleArea(5, 7);

console.log("Triangle 1:", t1.toFixed(1));
console.log("Triangle 2:", t2.toFixed(1));


// ================================
// 2) Sphere Volume
// ================================
function sphereVolume(radius) {
  const r = Number(radius);
  return (4 / 3) * Math.PI * (r ** 3);
}

// Tests
let s1 = sphereVolume(3);
let s2 = sphereVolume(5);

console.log("Sphere 1:", s1.toFixed(1));
console.log("Sphere 2:", s2.toFixed(1));


// ================================
// 3) Convert to Meters
// ================================
function toMeters(distance, unit) {

  // Short circuit
  if (distance === 0 || unit === "m") {
    return distance;
  }

  let result;

  switch (unit) {
    case "km":
      result = distance * 1000;
      break;

    case "y":
      result = distance * 0.9144;
      break;

    case "mi":
      result = distance * 1609.34;
      break;

    default:
      result = 0;
  }

  return result;
}

// Tests
console.log("Meters 1:", toMeters(50, "m").toFixed(2));
console.log("Meters 2:", toMeters(100, "y").toFixed(2));
console.log("Meters 3:", toMeters(1, "mi").toFixed(2));
console.log("Meters 4:", toMeters(1.234, "km").toFixed(2));


// ================================
// 4) Time to Seconds
// ================================
function timeToSeconds(time) {

  let parts = time.split(":");
  let seconds = 0;

  if (parts.length === 3) {
    // HH:MM:SS
    seconds =
      Number(parts[0]) * 3600 +
      Number(parts[1]) * 60 +
      Number(parts[2]);

  } else if (parts.length === 2) {
    // MM:SS
    seconds =
      Number(parts[0]) * 60 +
      Number(parts[1]);

  } else if (parts.length === 1) {
    // SS
    seconds = Number(parts[0]);
  }

  return seconds;
}

// Tests
console.log("Time 1:", timeToSeconds("02:33:21"));
console.log("Time 2:", timeToSeconds("00:04:51"));
console.log("Time 3:", timeToSeconds("04:51"));
console.log("Time 4:", timeToSeconds("00:13"));
console.log("Time 5:", timeToSeconds("13"));
