const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    
    // fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
        
    // });
    

    console.log('Published to browser')
    res.send('Hello World!')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))