// console.log('Task Manager App')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
// require('./db/connect')
const connectDB = require('./db/connect')
require('dotenv').config()


//middleware

app.use(express.json())
//we wont have data in req.body//

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI) 
       app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()


// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tacks/:id') - update task
// app.delete('api/v1/tasks/:id') - delete task