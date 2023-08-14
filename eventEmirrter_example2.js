const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listner
emitter.on('messageLogged', (eventArg)=>{
    console.log('Listner called. ', eventArg );
});

//Second Register a Listner
emitter.on('messageLogged', function(eventArg){
   console.log('Second Listner called. ', eventArg );
});
//Raise an Event.
emitter.emit('messageLogged', {id:1, url:'http://www.mycompany.com/'});
