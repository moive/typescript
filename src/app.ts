class DivideZeroException implements Error {
    constructor(public name: string, public message: string, public numerator: number){
        //
    }

}


function dividir(numerator: number, denominator: number): number | null {
    try{
        if(denominator === 0){
            throw new DivideZeroException("DivideByZero",
            "You can't divide by zero", numerator);
        }

        return numerator/denominator;
    } catch(e){
        if(e instanceof DivideZeroException){
            console.log('name: ', e.name);
            console.log('message', e.message);
            console.log('numerator: ', e.numerator);
        }
        else{
            let err = <Error>e;
            console.log(err.message);
            
        }
        return null;
    }
}

console.log(dividir(2,3));
console.log(dividir(2,0));

