// 1) triangle area
function triangleArea(base, height) {
  return (Number(base) * Number(height)) / 2;
}

// 2) sphere volume
function sphereVolume(radius) {
  const r = Number(radius);
  return (4 / 3) * Math.PI * (r ** 3);
}

// 3) convert to meters
function toMeters(distance, unit) {
  const d = Number(distance);
  const u = String(unit).toLowerCase();

  // short circuit
  if (d === 0 || u === "m") {
    return d;
  }

  switch (u) {
    case "km":
      return d * 1000;
    case "y": // yard
      return d * 0.9144;
    case "mi": // mile
      return d * 1609.344;
    default:
      // unknown unit
      return NaN;
  }
}

// 4) time string to seconds: "HH:MM:SS" or "MM:SS" or "SS"
function timeToSeconds(time) {
  const t = String(time).trim();
  if (t.length === 0) return 0;

  const parts = t.split(":").map(p => Number(p));

  // if any part is not a number
  if (parts.some(n => Number.isNaN(n))) return NaN;

  if (parts.length === 3) {
    const [hh, mm, ss] = parts;
    return (hh * 3600) + (mm * 60) + ss;
  }

  if (parts.length === 2) {
    const [mm, ss] = parts;
    return (mm * 60) + ss;
  }

  if (parts.length === 1) {
    return parts[0];
  }

  // unexpected format
  return NaN;
}

/* ======== Tests (console output) ======== */

// triangleArea tests
console.log(triangleArea(3, 4).toFixed(1));
console.log(triangleArea(5, 7).toFixed(1));

// sphereVolume tests
console.log(sphereVolume(3).toFixed(1));
console.log(sphereVolume(5).toFixed(1));

// toMeters tests
console.log(toMeters(50, "m").toFixed(2));
console.log(toMeters(100, "y").toFixed(2));
console.log(toMeters(1, "mi").toFixed(2));
console.log(toMeters(1.234, "km").toFixed(2));

// timeToSeconds tests
console.log(timeToSeconds("02:33:21"));
console.log(timeToSeconds("00:04:51"));
console.log(timeToSeconds("04:51"));
console.log(timeToSeconds("00:13"));
console.log(timeToSeconds("13"));
