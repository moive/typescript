interface Transformer {
    transformerString(value: string): string;
}

class Uppercase implements Transformer{
    public transformerString(value: string): string{
        return value.toUpperCase();
    }
}

class Reversed implements Transformer {
    transformerString(value: string): string{
        let valueReversed: string = value.split('')
        .map((char, index, arr) => arr[arr.length - 1 - index]).join('');

        return valueReversed;
    }
}

function processing(value: string, ...transformations: Transformer[]): string{
    let answer: string = value;
    for (let i = 0; i < transformations.length; i++) {
        let transformation = transformations[i];
        answer = transformation.transformerString(answer);
        
    }
    return answer;
}

let uppercase = new Uppercase();
let reversed = new Reversed();

let namePerson = "Moises";
let namePerson2 = "Veronika";
let namePerson3 = "Daniela";

console.log(processing(namePerson, uppercase));
console.log(processing(namePerson2, reversed));
console.log(processing(namePerson3, uppercase, reversed));
