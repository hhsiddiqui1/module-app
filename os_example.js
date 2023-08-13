const os = require('os');

var objOS = os.hostname();
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Object name is ' + objOS);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);