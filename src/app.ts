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

// Method Decorators
function delay(value: number){
    console.log("delay(): evaluated");
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("delay(): called");
        var originalMethod  = descriptor.value;
        descriptor.value = function(){
            var context = this;
            var args = arguments;
            setTimeout(() => {
                originalMethod.apply(context, args);
            },value);
        }
    }
}

function other(){
    console.log("other(): evaluated");
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("other(): called");
    }
}

class TimeOut{
    count: number = 0;

    @delay(500)
    @other()
    callMe(){
        this.count ++;
        console.log('callme is been called with ', this.count);
    }
}

let timeout = new TimeOut();
console.log('going to call this method callMe');
timeout.callMe();
console.log('after callMe is been called', timeout.count);