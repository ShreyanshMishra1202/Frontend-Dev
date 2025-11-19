// lexical environment

function outer() {
    let outerVar = 'I am from outer';
    var a=7;

    function inner() {
        let innerVar = 'I am from inner';
        console.log(outerVar); // Accessing outer function's variable
        console.log(innerVar); // Accessing inner function's variable
        console.log(a);
    }

    inner();
    // console.log(innerVar); // This would cause an error: innerVar is not defined
}

outer();

// closure example