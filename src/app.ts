
class SetValue<T>{
    private _set: Array<T> = [];

    
    public get set() : Array<T> {
        return this._set;
    }

    public add(value: T){
        if(!this.contains(value)){
            this._set.push(value);
        }
    }
    
    public contains(value: T): boolean{
        let exists = false;
        this._set.some((oldValue) => {
            if(value === oldValue){
                exists = true;
                return true;
            }

            return false;
        });

        return exists;
    }
}

console.log("---- set numbers ----");

let setNumbers = new SetValue<number>();
setNumbers.add(1);
setNumbers.add(2);
setNumbers.add(1);
console.log(setNumbers.set);


console.log("---- set strings ------");

let setStrings = new SetValue<string>();
setStrings.add("Moises");
setStrings.add("Veronika");
setStrings.add("Daniela");
setStrings.add("Veronika");
console.log(setStrings.set);
