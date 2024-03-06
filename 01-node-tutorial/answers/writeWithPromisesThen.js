 const { writeFile, readFile } = require("fs").promises;

 console.log('start');
 
 writeFile('./temporary/temp.txt', 'write this to the file\n', { flag: 'a'})
    .then(() => readFile('./temporary/temp.txt', 'utf8'))
    .then((content) => {
        console.log('Content read from temp.txt:', content); 
 })  
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 }) 