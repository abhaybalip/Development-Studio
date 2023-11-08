// Node js - http2

const print = (data) => console.log(data)
const index_path = __dirname + '\\public\\index.html'
const url = 'https://www.google.com'

// Library
const http2 = require('http2')
const http = require('http')

// server side

const server = http.createServer((req, res) => {
    if (req.url === '/data') {
        const readableStream = fs.createReadStream('./data.txt')
        readableStream.pipe(res)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Not Found')
    }
})

server.listen(3000, () => {
    print('Server listening on port 3000');
})


// client side

const fetch = require('node-fetch')

const fetchData = async () => {
    const response = await fetch('http://localhost:3000/data')
    const readableStream = response.body.getReader()

    const readChunk = async () => {
        const { done, value } = await readableStream.read()
        if (!done) {
            print('Received chunk:', value)
            await readChunk() // Recursively read the next chunk
        }
    }

    readChunk()
}
fetchData()