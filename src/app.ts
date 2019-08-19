
interface AnyKindOfObject {
    what: string;
}

interface reuseableTypes<T extends object>{
    entity: T;
}

const d: reuseableTypes<AnyKindOfObject> = {entity: {what: "wert"}}
console.log(d.entity.what)
