const promise = new Promise((resolve, reject)=>{
    reject(new Error("Sommething awful happened"));
});

promise.then((res)=>{
    // This is never called
});

promise.catch((err)=>{
    console.log('I get called:', err.message);
});