let student = {
    name: "Alice",
    age: 22,
    grade: "A"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

console.log("Total properties: " + Object.keys(student).length);
console.log(student.age);

const ages = new Array(25, 30, 35); // Creates [25, 30, 35]
const tenSlots = new Array(10); // Creates an array with 10 empty slots
console.log(ages)
console.log(tenSlots)