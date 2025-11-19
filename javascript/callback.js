function processUserInput(callback) {
    const name = "John Doe";
    callback(name);
}

processUserInput(function(name) {
    console.log("Hello, " + name);
});

processUserInput((name) => {
    console.log("Welcome, " + name);
});