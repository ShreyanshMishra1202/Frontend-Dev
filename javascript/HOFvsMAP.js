const arr = [1, 2, 3, 4, 5];

Array.prototype.applyCalc = function(arr, operation) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(operation(this[i]));
    }
    return result;
};

const square = function(n) {
    return n * n;
};

const circumference = function(n) {
    return 2 * Math.PI * n;
};

const area = function(n) {
    return Math.PI * n * n;
};

console.log(arr.map(square));
console.log(arr.map(circumference));
console.log(arr.map(area));