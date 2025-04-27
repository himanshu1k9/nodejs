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
 * 6. fs.mkdir / rmdir	Make or remove directory
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

/**
 * ################### path and os modules ##################
 */

const path = require('path');

// path.join() 

const filePath = path.join(__dirname, 'dummyfolder', 'dummy.txt');
console.log(filePath);

const baseName = path.basename(filePath); // getting file name 
console.log(baseName);

const extensionName = path.extname(filePath); // getting entenssion of a file
console.log(extensionName);

const dirName = path.dirname(filePath); // getting  directory name of a file
console.log(dirName);

// parsing an existing dirName
const parsed = path.parse(filePath);
console.log(parsed);


// formmat the path 
const formated = path.format(parsed);
console.log(formated);



/** 
 * ##################### OS Module ######################
 * 
 * */

const os = require('os');

const plateForm = os.platform(); // getting plateform of operating system
console.log(plateForm);

const homeDir = os.homedir(); // getting home directory of os
console.log(homeDir);

// getting host name
const hostName = os.hostname(); // computer name
console.log(hostName);

// getting architecture
const arch = os.arch();
console.log(arch); // x64

// getting number of cpus
const cpus = os.cpus();
console.log(cpus);

// getting memory details RAM Detaills
const freeMemory = os.freemem() / 1024 / 1024; // MB
const totalMeemory = os.totalmem();
console.log(freeMemory, totalMeemory);

// Getting Netowking interface

const interface = os.networkInterfaces();
console.log(interface);

// getting ip
for (const name of Object.keys(interface)) {
    for (const net of interface[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
        console.log(`Your IP address: ${net.address}`);
      }
    }
  }