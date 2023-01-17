console.log('starting')

// Asynchonous non blocking

// resgistering an event callback pair with event as wait for 2 seconds and the call back is the function
// javascript is a single threaded but node js manages other threads to work with different events
setTimeout(() => {
    console.log('2 seconds timer');
}, 2000)

// Asynchronous callback
setTimeout(() => {
    console.log("0 sec timer")
}, 0)


const names = ["Abhash", "kumar", "ravi", "manvi"]

// synchronous call back
var p = names.filter((name) => {
    return name.length <= 4;
})

console.log(p);
console.log('stopping')

/*
starting
stopping   
0 sec timer
2 seconds timer
*/

// call stack, callback, callback queue and event loop
// https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728912#content
// the event loop looks at two thing it looks into the call stack and looks into the callback queue it wont start executing the callbacks unless the call stacks is empty

// with regular synchronous programming end of main signifies end of program, but with asynchronous end of main starts to execute the callbacks 

// A callback function is nothing but another function that is passed in function with an intension to be called later on 