const students=[
    {name: "Aakash",grade: "A"},
    {name: "Swapnaneel",grade: "B"},
    {name: "Shreyansh",grade: "A"}
];
 const ab =students.reduce((acc,curr)=>{
    (acc[curr.grade] = acc[curr.grade] || []).push(curr);
    return acc;
 },{});
console.log(ab);