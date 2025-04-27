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

/**
 * ############# Commanly used FS Methods ################
 * 1. fs.writeFile
 * 2.fs.appendFile :- Add to an existing file
 * 3. fs.readFile
 * 4. fs.unlink :- delete a line
 * 5. fs.rename :- rename an existing file
 */

// appended text to existing file
fs.appendFile('message.txt', '\nI have added some other things to the existing one.', (err) => 
    {
        if(err) throw err;
        fs.readFile('message.txt', 'utf-8', (err, data) => 
            {
                console.log(data)
            });
    });

fs.unlink('test.text', (err) => 
    {
        if(err) throw err;
        console.log('File deleted');
    });

// fs.rename('message.txt', 'demo.txt', (err) => 
//     {
//         if(err) throw err;
//         console.log('file renamed.')
//     });