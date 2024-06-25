const express = require('express')
const app = express()
const { people } = require('./data')
const peopleRouter = require('./router/people')
const logger = require('./logger')

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('./methods-public'))

// logger is exported from logger.js
// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const currentTime = new Date().getTime()
//   console.log(method, url, currentTime)
//   next()
// }

app.use(logger)

app.get('/', (req, res) => {
  res.send('Home')
})

// no longer needed
// app.get('/api/v1/people', (req, res) => {
//   res.json('people')
// })

// app.post('/api/v1/people', (req, res) => {
//   const { person } = req.body
//   if (person) {
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
//   } else { res.status(400).json({ sucess: false, message: "Please provide a name"});
//   }
// })

// this has to come after the above app.post or "stuff wont work"
app.use("/api/v1/people", peopleRouter)


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// app.use(morgan('tiny'))


// second way to invoke middleware
// app.use([logger, authorize])
// third way to invoke middleware
// app.use(express.static('./public'))



// const authorize = require('./authorize')
// const morgan = require('morgan')

//  req => middleware => res




// const express = require('express');
// const app = express();
// const { products } = require("./data");

// app.get("/api/v1/products", (req, res) => {
//     res.json(products);
// })

// //my own query Filter products with "farm-to-table" in the description
// //for some reason I had to move this up before app.get("/api/v1/products/:productID" not sure why
// app.get("/api/v1/products/farm-to-table", (req, res) => {
//   const farmToTableProducts = products.filter(product => product.desc.includes("farm-to-table"));
//   console.log("Request received for /api/v1/products/farm-to-table");
//   res.json(farmToTableProducts);
// });

// app.get("/api/v1/products/:productID", (req, res) => {
//   const idToFind = parseInt(req.params.productID); 
//   const product = products.find((p) => p.id === idToFind);
//   if(product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: "That product was not found." })
//   }
// })

// app.get("/api/v1/query", (req, res) => {
//   const { search, limit } = req.query;
//   let filteredProducts = [...products];

//   if (search) {
//     filteredProducts = filteredProducts.filter(product => product.name.startsWith(search));
//   }
//   if (limit) {
//     filteredProducts = filteredProducts.slice(0, parseInt(limit));
//   }
//   res.json(filteredProducts);
// })


// app.get("/api/v1/test", (req, res) => {
//     res.json({message: "It worked!" });
// })

// app.all('*', (req, res) => {
//   res.status(404).send('resource not found')
// })

// app.listen(3000, () => {
//     console.log('server is listening on port 3000....')
// })


// attempting...
// const https = require('https');

// const fetchData = () => {
//   https.get('https://localhost:3000/api/v1/data', (response) => {
//     let data = '';

//     response.on('data', (chunk) => {
//       data += chunk;
//     });

//     response.on('end', () => {
//       console.log(JSON.parse(data));
//     });
//   }).on('error', (error) => {
//     console.error(`Error fetching data: ${error}`);
//   });
// };
