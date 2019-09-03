const fs = require('fs');  // include file module to read and write 

const read_data = fs.readFileSync('./testFile.txt','utf-8');

console.log(read_data);

//const textIn = 'output of this text is:  ' + read_data; // first way
const textIn = `Output of this text is: ${read_data}\n Created on ${Date.now()}`; // second way and we can do any calculation in here {}
console.log(textIn);

fs.writeFileSync('./output.txt',textIn); // write something in a file
console.log('file written!');