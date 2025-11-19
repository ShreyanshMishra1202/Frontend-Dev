let now=Date.now();
console.log("Current timestamp: " + now);

let date=new Date();
console.log("Current date and time: " + date.toString());

let future =new Date(now + 60*60*24*1000).getTime();
console.log("Specific date: " + future); // it adds one day
