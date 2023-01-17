// async function always returns a promise
const doWork = async () => {
    // rejecting the promise by throwing
    //throw new Error('rejecting the promise')
    // automatically returning the promise(no need to wrap in resolve created by promise)
    return "Abhash"
}

console.log(doWork())


doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log(e)
})


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0)
            reject('negative numbers given')
            resolve(a + b)
        }, 2000)
    })
}

const addSum = async() => {
       var x = await add(1,2)
       var y = await add(x, -4) 
       console.log(y)    
}

addSum()