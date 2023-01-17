console.log('client side javascript is loaded')

const form = document.querySelector('form')
const search = document.querySelector('input')

form.addEventListener('submit', (e)=> {
    //default behaviour of form is to load the page
    e.preventDefault()
    const page = search.value
    
    fetch(`http://localhost:3000/getUser?page=${page}`).then((response) => {
        response.json().then((data) => {
          console.log(data)
        })
    })
})