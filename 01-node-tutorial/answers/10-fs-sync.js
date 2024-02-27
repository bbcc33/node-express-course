const { readFileSync, writeFileSync } = require('fs')

console.log('start');

const first = readFileSync('./temporary/first.txt', 'utf8');
const second = readFileSync('./temporary/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./temporary/result-sync.txt', 
`Here is the result: ${first}, ${second}`, 
{ flag: 'a'})

console.log('done with this task')
console.log('starting the next one')