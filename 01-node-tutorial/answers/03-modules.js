const names = require('./04-names')
const sayHi = require('./02-global')
const altItem = require('./06-alternative-flavor')
const single = require('./05-utils')
//when your function is executed in its own file you do not need to assign 'require' to a variable?
require('./07-mind-grenade')

sayHi('Susan')
sayHi(names.BB)
sayHi(names.Susie)
console.log(altItem)
console.log(single)