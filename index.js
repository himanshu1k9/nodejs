// console.log('hello node js')

/**
 * ############# FS Modules #############
 */

const fs = require('fs');
fs.writeFileSync("test.text", 'Hello node js module fs')

const data = fs.readFileSync('test.text', 'utf-8');
console.log(data);

fs.writeFile('message.txt', 'hello javascript your awesome features', (err) => 
    {
        if(err) throw err;
        fs.readFile('message.txt', 'utf-8', (err, data) => 
            {
                if(err) throw err;
                console.log(data)
            });
    });