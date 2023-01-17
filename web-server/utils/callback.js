const request = require('request')

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

module.exports = {
    getUsersFromPage,
    getSpecificUser
}