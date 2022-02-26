// Using Http Module
/*
//Using response object
const https = require('http')
const server = https.createServer((request, response) => {
    response.write('Welcome to Homepage')
    response.end()
})
server.listen(5000)
*/
//Using the request object
const https = require('http')
const server = https.createServer((request, response) => {
    if(request.url === '/') {
        response.end('Welcome to Hompage')
    }
    if(request.url === '/about') {
        response.end('Here is about page')
    }
    response.write(`<h1>Oops!</h1><br><p>Page not found</p>`)
   
})
server.listen(5000)