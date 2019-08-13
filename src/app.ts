let numeros: number[] = [];

let numeros2: Array<number> = [];

numeros.push(1,2,3,4,5);

let cuadrados = numeros.map((v)=>v*v);
console.log(cuadrados)

let id = document.getElementById("test");

let noNull = id!;

enum Color {Green = 1, Red = 2, Blue = 5, Yellow = 10};

let c: Color = Color.Green;

function verifyColor(c: Color){

    switch(c){
        case Color.Green:
            console.log("Green");
            break;
        case Color.Red:
            console.log("Red");
            break;
    }

    if(c === Color.Yellow){
        // something code.
    }
}
