const user={
    name:"aakarsh",age:22,city:"Delhi",
    myfunc : function(){
        console.log("func called")
    }
};
// without destructuring
// const name2=user.name;
// const age2=user.age;
// const city2=user.city;
// user.myfunc();
// console.log(name2,city2,age2);
// -----------------------------------------------------------------------------



// with destructuring
// const{name,age,city}=user;
// console.log(name,age,city)

const{name, ...others}=user;
console.log(name);
console.log(others);