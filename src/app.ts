Promise.resolve(123)
    .then((res)=>{
        throw new Error('something bad happend');
        return 456
    })
    .catch((err)=>{
        console.log('first catch:', err.message);
        return 123
    })
    .then((res)=>{
        console.log(res);
        return Promise.resolve(789);
    })
    .catch((err)=>{
        console.log('second catch:', err.message);
    });