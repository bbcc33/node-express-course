const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const login = async(req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        throw new BadRequestError('Please provide email and password')
}

// console.log(username, password)
// res.send('Fake Login/Register/Signup Route')


const id = new Date().getDate()

const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d',})

res.status(200).json({msg:'user created', token})

}

const dashboard = async(req, res) => {
    // console.log(req.user)
//     const authHeader = req.headers.authorization;

//     if(!authHeader || !authHeader.startsWith('Bearer ')) {
//     throw new CustomAPIError('No token provided', 401)
// }

// const token = authHeader.split(' ')[1]
// console.log(token)

// try {
//     const decoded = jwt.verify(token, proces.env.JWT_SECRET)

    const luckyNumber = Math.floor(Math.random() * 100) 

    res.status(200).json({
        msg: `Hello ${req.user.username}`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})

//     console.log(decoded);
// } catch (error) {
//     throw new CustomAPIError('No token provided', 401)
}


module.exports = {
    login, dashboard
}