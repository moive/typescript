class Dog{
    public  annoy(): void {
        console.log("I annoy");
    }

    public makeNoise(): void {
        console.log("auf auf");
    }

    public playDead(): void{
        console.log("...");
        
    }
}

class Cat{
    public annoy(): void {
        console.log("I annoy");
    }

    public makeNoise(): void{
        console.log("miau");
    }

    public beIndifferent(): void{
        console.log("I don't care about anything");
        
    }
}

function startMakingNoise(animal: Dog | Cat): void{
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





