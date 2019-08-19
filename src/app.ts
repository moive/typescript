
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