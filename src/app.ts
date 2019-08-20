//Mapped Partial

interface Todo{
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
    return {...todo, ...fieldsToUpdate}
}

const partial1 = {
    title: 'organize desk',
    description: 'clear cluster'
}

const partial2 = updateTodo(partial1, {
    description: 'throw out trash'
});

console.log(partial2)


//Mapped Readonly
interface TodoReadonly{
    title: string;
}
const readonly1 : Readonly<Todo> = {
    title: 'Delete inactive user',
    description: ''
}
//Cannot assign to 'title' because it is a read-only property.
//readonly1.title = 'Hello';


//Mapped Record<K,T>

interface PageInfo{
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const record1: Record<Page, PageInfo> = {
    about: {title: 'about'},
    contact: {title: 'contact'},
    home: {title: 'home'}
};

console.log(record1);

//Mapped Pick<T,K>

interface TodoPick extends Todo{
    completed: boolean;
}

type TodoPreview = Pick<TodoPick, 'title' | 'completed'>;

const pick1: TodoPreview = {
    title: 'Clean room',
    completed: false
};

console.log(pick1);

//Mapped Omit<T,K>

interface TodoOmit extends Todo{
    completed: boolean;
}

type TodoPreviewOmit = Omit<TodoOmit, 'description'>;

const omit1: TodoPreviewOmit = {
    title: 'Clean room',
    completed: true
}

console.log('omit', omit1)