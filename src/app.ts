abstract class Animal {
    public  annoy() {
        console.log("I annoy");
        return this;
    }

    public abstract makeNoise(): void;
}
// Cannot create an instance of an abstract class
// let animal = new Animal();

class Dog extends Animal{
    public makeNoise(): Dog {
        console.log("auf auf");
        return this;
    }

    public bites(): Dog{
        console.log('Bites his victim');
        return this;
    }

    public runAway(): Dog{
        console.log('runs away with his tail between legs.');
        return this;
        
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

dog.makeNoise().bites().bites().annoy().bites().playDead();



