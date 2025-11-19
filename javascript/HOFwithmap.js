radius = [8,9,2,3];

var circ = radius.map(i=> 2 * Math.PI * i);
console.log("Circumference:",circ);

var area = radius.map(i=> Math.PI * i * i);
console.log("Area:",area);

var diameter = radius.map(i=> 2 * i);
console.log("Diameter:",diameter);