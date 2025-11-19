const num3=[1,2,3,4,5];
const even = num3.filter(n => n%2 === 0);
const reduce = num3.reduce((acc,currentVal)=>acc+currentVal,2);
console.log(even);
console.log(reduce);