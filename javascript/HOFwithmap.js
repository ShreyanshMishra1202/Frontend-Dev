radius = [8,9,2,3];

const circ = radius.map(i=> 2 * Math.PI * i);
console.log("Circumference:",circ);

const area = radius.map(i=> Math.PI * i * i);
console.log("Area:",area);

const diameter = radius.map(i=> 2 * i);
console.log("Diameter:",diameter);