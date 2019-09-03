const fs = require('fs');  // include file module to read and write 

const read_data = fs.readFileSync('./testFile.txt','utf-8');

console.log(read_data);
