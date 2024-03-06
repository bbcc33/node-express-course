const { createReadStream } = require('fs')

const filepath = '../content/big.txt'
const highWaterMarkValues = [200];

for (const highWaterMark of highWaterMarkValues) {
    let counter = 0;

    const stream = createReadStream(filepath, { highWaterMark, encoding: 'utf8' });
    
    stream.on('data', (chunk) => {
        counter++;
        console.log(`Received chunk ${counter}: ${chunk}`);
    });

    stream.on('end', () => {
        console.log(`Total chunks received: ${counter}`);
    });

    stream.on('error', (error) => {
        console.log('Error', error.message);
    }
)}