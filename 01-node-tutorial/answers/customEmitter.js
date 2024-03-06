const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data recieved: user ${name} with id: ${id} `)
})

customEmitter.emit('response', 'John', 34)