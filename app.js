const fs = require('fs');  // include file module to read and write 

//non-blocking asynchronous way
fs.readFile('./testFile.txt', 'utf-8', (err, data) => {
    console.log(data);
    fs.writeFile('./testFile2.txt',data,'utf-8',err =>{
        console.log('file has been written');
    });
});

console.log('read data!');
