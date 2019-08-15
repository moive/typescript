interface MyInterface<T, U>{
    myFirstFunction(value: T): void;
    mySecondFunction(value: U): void;
    myThirdFunction(value1: T, value2: U): void;
}

class MyClass<T,U> implements MyInterface<T, U>{
    public myFirstFunction(value: T){
        console.log(value);
    }
    public mySecondFunction(value: U){
        console.log(value);
    }
    public myThirdFunction(value1: T, value2: U){
        console.log(value1);
    }
}

let myClass = new MyClass<string, number>();
myClass.myThirdFunction("hi", 5);