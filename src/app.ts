//Decorators
function ClassConsoleLog(target: any){
    console.log("class", target);
    target.prototype.created = new Date();
}

function ClassWas(target: any){
    console.log("instantiated");
}

@ClassConsoleLog
@ClassWas
class Person {
    created?: Date;
}

let p = new Person();
let d = p.created;
console.log(p.created);