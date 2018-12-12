const fs = require('fs');

function readFilePromisified(filename) {
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, (error, data) => {
            if (error) {
                reject(error);
            }
            resolve(data);            
        });
    });
}

readFilePromisified('file1.txt').then(text => {   
    console.log(text.toString()) 
    return readFilePromisified('file2.txt')        
}).then(text => {
    console.log(text.toString())
    return readFilePromisified('file3.txt')
}).then(text => {
    console.log(text.toString())
})
.catch(error => {
    console.log(error);
});