const EventEmmiter = require('events');

class emitter extends EventEmmiter {}

const myEmitter = new emitter();

myEmitter.on('event', () => {
    console.log('event emitted');
});

myEmitter.emit('event');