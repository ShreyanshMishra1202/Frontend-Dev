function ParentLayer(){
    let parentValue = 50;

    function outerFunc(){
        var value = 10;

        function innerFunc(){
            console.log("The value is: " + value);
            console.log("The parent value is: " + parentValue);
        }

        value += 5;
        return innerFunc;
    }
    return outerFunc();
}

var finalFunc = ParentLayer();
console.log(finalFunc.toString());
finalFunc();