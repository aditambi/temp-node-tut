const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`Welcome to our hopme page`)
    } 
    else if(req.url === '/about') {
        res.end(`Here is the short history`)
    } else {
    res.end(`
    <h1>oops!! </h1>
    <p> We cant seems to find thepagew you are looking for</p>
    <a href = "/"> back home </a>
    `)}
})

server.listen(5000)