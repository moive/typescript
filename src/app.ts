const promise = new Promise((resolve, reject)=>{
    resolve(456);
});

promise.then((res)=>{
    console.log('I get called:', res === 456);
});

promise.catch((err)=>{
    console.log(err);
});