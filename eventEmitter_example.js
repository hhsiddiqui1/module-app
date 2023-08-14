const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listner
emitter.on('messageLogged', function(){
    console.log('Listner called.');
});

//Second Register a Listner
emitter.on('messageLogged', function(){
    console.log('Second Listner called.');
});
//Raise an Event.
emitter.emit('messageLogged');

//Third Register a Listner
emitter.on('messageLogged', function(){
    console.log('Third Listner called.');
});