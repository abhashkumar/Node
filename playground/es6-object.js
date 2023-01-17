//Object property shorthand

const name_ = 'Abhash'
const userAge = 27

/*
const user = {
    name_: name_,
    Age: userAge,
    location: 'Banglore'
}
*/
//short hand syntax
const user = {
    name_,
    userAge: userAge,
    location: 'Banglore'
}
console.log(user)

const product = {
    id: 5,
    label: 'red label',
    stock: 20
}
// Object destructuring with default value and variable nameing

const  {id = 2, label: productLabel,stock, rating = 7} = product

console.log(id, productLabel, stock, rating);

// destructing as a function parameter, and giving default object and default value for stock
const transaction = (type, {label, stock = 5} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product);
transaction('order')