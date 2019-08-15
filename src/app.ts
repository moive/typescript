interface WithLength{
    length: number;
}

function myFunction<T extends WithLength>(value: T){
    value.length;
}


myFunction("Moises");

var myVar = {
    length: 5,
    name: "Moises"
};

myFunction(myVar);