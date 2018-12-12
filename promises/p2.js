const fs = require('fs');

function readFilePromisified(filename) {
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, (error, data) => {
            if (error) {
                reject(error);
            }
            console.log(data.toString()); 
            resolve(data);            
        });
    });
}

readFilePromisified('file1.txt').then(text => {    
    readFilePromisified('file2.txt').then(text => {
        readFilePromisified('file3.txt').then(text => {        
        })        
    })
}).catch(error => {
    console.log(error);
});