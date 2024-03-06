const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        console.log('start')

        const first = await readFile('./temporary/first.txt','utf8')
        const second = await readFile('./temporary/second.txt','utf8')
        const third = await readFile('./temporary/third.txt','utf8')
        
        await writeFile('./temporary/temp.txt',
        `this is the text I am writing to the file. As well as: ${first}.`, {flag: 'a'});

        console.log(first, second, third);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

const reader = async () => {
    try {
        const content = await readFile('./temporary/temp.txt', 'utf8');
        console.log('Content read from temp.txt:', content);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

const readWrite = async () => {
    await writer();
    await reader();
};

readWrite();