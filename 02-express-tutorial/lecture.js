console.log('Express Tutorial')

const http = require('http')
const {readFileSync} = require('fs');

//get all files
    // const homePage = readFileSync('./index.html')
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
        // console.log(req.url)

    //console.log(req.method)
    const url = req.url

    //home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        // res.write('<h1>home page</h1>')
        res.write(homePage)
        res.end()
    }
    //about page
    else if(url === '/about') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
        // console.log('user hit the server')
        // res.end('home page')

    //styles
    //why is ./navbar/-app/ not needed before these?
    else if(url === '/styles.css') {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }

    //image/logo
    else if(url === '/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }

    //logic
    else if(url === '/broswer-app.js') {
        res.writeHead(200,{'content-type':'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
        
    //404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)


// from Mondays lecture
// const express = require('express')
// const router = require('./routers/movies')

// const app = express()

// //setup static and middleware
// app.use(express.static(root: './public'));


// app.get("/api/v1/:name", (req, res) => {
//     const name = req.params.name
//     res.status(code: 200).send(body: '<h1>${name} BB</h1>')
//     //200 means everything is okay
// })

// app.use('/api/v1/movies', router);

// app.all(path: '*', handlers:(req, res) => {
//     res.status(code: 404).send(body: 'resource not found')
// })

// app.listenerCount(port: 3000, hostname: () => {
//     console.log('server is listening on port 3000....')
// })


const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})


const express = require('express')
const app = express();

app.get('./', (req, res) => {

})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening')
})



// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen



console.log('Express Tutorial')

const http = require('http')
const {readFileSync} = require('fs');

//get all files
    // const homePage = readFileSync('./index.html')
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
        // console.log(req.url)

    //console.log(req.method)
    const url = req.url

    //home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        // res.write('<h1>home page</h1>')
        res.write(homePage)
        res.end()
    }
    //about page
    else if(url === '/about') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
        // console.log('user hit the server')
        // res.end('home page')

    //styles
    //why is ./navbar/-app/ not needed before these?
    else if(url === '/styles.css') {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }

    //image/logo
    else if(url === '/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }

    //logic
    else if(url === '/broswer-app.js') {
        res.writeHead(200,{'content-type':'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
        
    //404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)


// from Mondays lecture
// const express = require('express')
// const router = require('./routers/movies')

// const app = express()

// //setup static and middleware
// app.use(express.static(root: './public'));


// app.get("/api/v1/:name", (req, res) => {
//     const name = req.params.name
//     res.status(code: 200).send(body: '<h1>${name} BB</h1>')
//     //200 means everything is okay
// })

// app.use('/api/v1/movies', router);

// app.all(path: '*', handlers:(req, res) => {
//     res.status(code: 404).send(body: 'resource not found')
// })

// app.listenerCount(port: 3000, hostname: () => {
//     console.log('server is listening on port 3000....')
// })