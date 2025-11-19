const arr = [1, 2, 3, 4, 5];

const applyCalc = function(arr, operation) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(operation(arr[i]));
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

console.log("Squares:", applyCalc(arr, square));
console.log("Circumferences:", applyCalc(arr, circumference));
console.log("Areas:", applyCalc(arr, area));