function outerFunc() {
    var value = 10;
    function innerFunc() {
        console.log("The value is: " + value);
    }

    // value += 5;
    return innerFunc;
}

var resFunc = outerFunc();
console.log(typeof resFunc);
console.log(resFunc);
console.log(resFunc.toString());
resFunc();

