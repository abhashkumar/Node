const request = require('request')

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

// this add function is not returning anything because this function should be over to get setimeout to be executed, the callback will make data avaiable from the place it is called 
add(1, 3, (sum) => {
    // you will have data at this place once the settimeout is done by callback execution inside it 
    console.log(sum);
})


const getUsersFromPage = (pageNumber, callback) => {
    request({url:`https://reqres.in/api/users?page=${pageNumber}`, json:true}, function (error, response, body) {
        callback(error, response, body);
    });
}

const getSpecificUser = (id, callback) => {
    request({url:`https://reqres.in/api/users/${id}`, json:true}, function (error, response, body) {
        callback(error, response, body);
    });
}

/*
getUsersFromPage(2, (error, response, body) => {

    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    }
)

getSpecificUser(2,(error, response, body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

})
*/

//callback chaining

const pageNumber = process.argv[2]

if(!pageNumber){
    console.log("PLease enter a valid page number")
}else {
    getUsersFromPage(pageNumber, (error, response, body) => {
        if(error) {
            return console.error('error:', error); // Print the error if one occurred
        }
        
        if(body.data.length == 0)
        {
            return console.log("There is no data in that page")
        }
        
        getSpecificUser(body.data[0].id,(error, response, body) => {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        
        })
    })
}