const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    // const search = 'ab'
    const products = await Product.find({price:{$gt:30}})
    .sort('price').
    select('name price')
    // .limit(10)
    // .skip(1)
        // featured:true
        // name: {$regex: search, $options: 'i'},
    // })
    // throw new Error('testing async errors')
    // res.status(200).json({msg: 'products testing route'})
    res.status(200).json({ products, nbHits:products.length})
}
const getAllProducts = async (req, res) => {
    const {featured, company, name, sort, fields, numericFilters} = req.query
    const queryObject = {}

    if(featured) {
        queryObject.featured = featured === 'true'? true : false
    }

    if(company) {
        queryObject.company = company
    }

    if(name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    if(numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': 'eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        // console.log(filters)
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field,operator,value] = item.split('-')
            if(options.includes(field)) {
                queryObject[field] = {[operator] : Number(value)}
            }
        })
    } 
    console.log(queryObject)
    let result = Product.find(queryObject)
    //sort
    if(sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
        // console.log(sort)
        // products = products.sort()
    }
    else {
        result = result.sort('createdAt')
    }

    if(fields) {
        const fieldsList = sort.split(',').join(' ')
        result = result.select(fieldsList)
    }

    const page = Number(req.query.page)  || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit;
    
    result = result.skip(skip).limit(limit)
//23 products, 23/7 = 4 pages, 7, 7, 7, 2

    const products = await result
    // const products = await Product.find(req.query);
    // res.status(200).json({msg: 'products route'})
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts, 
    getAllProductsStatic,
}