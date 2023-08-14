const fs = require('fs');
var files = fs.readdirSync('./');
//var fileCreate = fs.createWriteStream('./', fs.appendFile,
//var logFile = fs.writeFileSync('./test.log', files, );

console.log(files);