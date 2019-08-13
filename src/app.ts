abstract class Animal {
    public  annoy(): void {
        console.log("I annoy");
    }

    public abstract makeNoise(): void;
}
// Cannot create an instance of an abstract class
// let animal = new Animal();

class Dog extends Animal{
    public makeNoise(): void {
        console.log("auf auf");
    }

    public playDead(): void{
        console.log("...");   
    }
}

class Cat extends Animal{
    public makeNoise(): void{
        console.log("miau");
    }

    public beIndifferent(): void{
        console.log("I don't care about anything");
        
    }
}

function startMakingNoise(animal: Animal): void{
    animal.makeNoise();
}

let dog = new Dog();
let cat = new Cat();

console.log('dog');
startMakingNoise(dog);
dog.annoy();
dog.makeNoise();
console.log("-----------");
console.log("cat");
startMakingNoise(cat);
cat.annoy();
cat.beIndifferent();





