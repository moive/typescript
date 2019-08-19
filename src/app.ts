
interface AnyKindOfObject {
    what: string;
}

interface reusableTypes<T extends object>{
    entity: T;
}

const d: reusableTypes<AnyKindOfObject> = {entity: {what: "wert"}}
console.log(d.entity.what)


interface ObjectWithId{
    id: number;
    what: string;
}

interface ReusableInterface<T extends {id: number}>{
    entity: T;
}

// const e: ReusableInterface<AnyKindOfObject> = {entity: {id: 5, what: 1}};

const f: ReusableInterface<ObjectWithId> = { entity: {id:1, what: "hi"}};
console.log(f.entity.what);



interface WithId {
    id:number;
}

interface User{
    name: string;
}

interface Developer extends User{
    favoriteLanguage: string;
}

function identifyUser<T extends User>(user: T): T & WithId {
    const newUser = (<any>Object).assign({}, user, {id: 1});
    return newUser;
}

const user: Developer = {name: "Patrick", favoriteLanguage: "Typescript"};
const userWithId = identifyUser(user);
console.log(userWithId)
console.log(`${userWithId.name} (${userWithId.id}) favorite language is ${userWithId.favoriteLanguage}`);

//generics with union

interface objectWithAge{
    kind: "objectwithAge";
    age: number;
}

function func<T extends objectWithAge | objectWithAge []>(p: T){
    if(p instanceof Array){
        return p[0];
    }
    return p;
}

//keyof

interface man {
    name: string;
    birtDate: Date;
    isHappy: boolean;
}

const homo: man = {
    name: "tks",
    birtDate: new Date(1234,0,1),
    isHappy: true
}

function showHuman(obj: man, field: string): void{
    console.log((<any>obj)[field]);
}

showHuman(homo, "isHappy");


function showHuman2(obj: man, field: keyof man): void{
    console.log(obj[field]);
}

showHuman2(homo, 'name');

function prop<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const todo = {
    id:1,
    text: "Buy milk",
    due: new Date(2019, 8, 19)
}

interface Todo{
    id: number;
    text: string;
    due: Date;
}

type TodoKeys = keyof Todo;


const id = prop(todo, "id");
const text = prop(todo, "text");
const due = prop(todo, "due");