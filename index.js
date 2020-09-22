// console.log(100)
// console.log(100)
// console.log(500)
// // console.log(300)
const http = require('http')
const server = http.createServer((req, res) => {
    // res.statusCode(200, "")
    res.writeHead(200, { "content-type": "text/html" })
        // res.end({ '<h1>hello world</h1>' })
    res.end('<h1>hello world</h1>')
})

server.listen(3000, function() {
    console.log("start server")
})