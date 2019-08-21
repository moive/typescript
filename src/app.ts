Promise.reject(new Error('something bad happened'))
    .then((res) => {
        console.log(res);
        return 456
    })
    .then((res)=>{
        console.log(res);
        return Promise.resolve(789);
    })
    .then((res)=>{
        console.log(res);
        return 102
    })
    .then((r)=> {
        console.log(r)
    })
    .catch((err) => {
        console.log(err.message)
    });