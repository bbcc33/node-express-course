const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./temporary/first.txt', 'utf8', (err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./temporary/second.txt', 'utf8', (err, result)=> {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./temporary/result-async.txt', 
        `Here is the result: ${first}, {second}`, 
        { flag: 'a'}, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')