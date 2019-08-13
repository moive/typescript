try {
    let name : string = 'Moises';
    name = name.toUpperCase();
    throw new Error("You shouldn't capitalize a name.");
} catch (e) {
    let err = <Error>e;
    console.log('name: ', err.name);
    console.log('message: ', err.message);
    console.log('stack: ', err.stack);
    
    
}