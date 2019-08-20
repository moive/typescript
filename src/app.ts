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