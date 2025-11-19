let arr = ["aakash","amol"];
let object = {
    name: "Manu",
    city: "Pune",
    aa: Symbol("id1"),
    getIntro: function(){
        console.log(this.name + " from " + this.city+"   "+this.aa.toString());
    }
}

let obj2 = {
    name: "Sonu"
}

obj2.__proto__ = object;

obj2.getIntro();    // it will inherit properties present in object and not obj2
object.getIntro();