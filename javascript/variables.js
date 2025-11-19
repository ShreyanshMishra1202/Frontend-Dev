var a=10;
let b=20;
const c=30;


var a=15; // redeclaration with var is allowed (we did redeclare and reinitialize)
b=25;     // reassignment with let is allowed  (redeclaration not allowed but reinitialize is allowed ) cannot use-->  let b=25;
// c=35;  // reassignment or redeclaration with const is not allowed (uncommenting this line will cause an error)
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);