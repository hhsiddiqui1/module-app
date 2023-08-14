const fs = require('fs');
//var files = fs.readdirSync('./');
//var fileCreate = fs.createWriteStream('./', fs.appendFile,
//var logFile = fs.writeFileSync('./test.log', files, );
fs.readdir('./', function(err, files1)
{
    if (err)
    {
        console.log('Error:' + err);
    }
    else
    {
        console.log('Result:' + files1 );
    }
})
