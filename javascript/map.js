let arr=[1,2,3,4];
let result=arr.map(n => n*2);
// for(let i =0;i<arr.length;i++){
//     result.push(arr[i]*2);
// }
// console.log(result);
arr.map((n,index) => {
    console.log (n*2,"My index "+index);
    console.log(`My Number is ${n*2} My index is ${index}`);
});