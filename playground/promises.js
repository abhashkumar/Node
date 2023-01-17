const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        //resolve([7,4,1])
        //reject
        reject("Things went wrong")
    }, 2000)
})


doWorkPromise.then((data) =>{
    console.log(data)
}).catch((error) => {
    console.log(error)
})


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1,2).then((sum1) => {
    console.log(sum1);
    // returning promises for chaining
    return add(sum1, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})