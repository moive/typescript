
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