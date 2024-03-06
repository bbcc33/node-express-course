//one way to export objects
module.exports.items = ['item1', 'item2']
const person = {
    name: 'bob'
}

//another way to export objects
//module.exports is the base, what comes after is printed along with its data
module.exports.singlePerson = person