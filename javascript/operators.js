let arr = [1,2,3,4,5.9];
console.log(arr);

arr.push(6);
console.log("After push: " + arr);

arr.pop();
console.log("After pop: " + arr);

arr.shift();
console.log("After shift: " + arr);

arr.unshift(1);
console.log("After unshift: " + arr);

let sliced = arr.slice(1,4);
console.log("Sliced array (1 to 4): " + sliced);

let spliced = arr.splice(2,2,8,9);
console.log("Spliced elements: " + spliced);
console.log("Array after splice: " + arr);

let index = arr.indexOf(3);
console.log("Index of 3: " + index);

arr.sort((a,b) => b - a);
console.log("Sorted array (descending): " + arr);

let mapped = arr.map(x => x * 2);
console.log("Mapped array (elements * 2): " + mapped);

let filtered = arr.filter(x => x > 3);
console.log("Filtered array (elements > 3): " + filtered);

let reduced = arr.reduce((acc, val) => acc + val, 0);
console.log("Reduced array (sum of elements): " + reduced);