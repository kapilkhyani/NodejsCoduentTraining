const express = require('express')

const mongoF = require('./mongoFunctions')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('Published to browser')
    res.send('Hello People!')
})

app.get('/task/all', (req, res) => {        
    mongoF.mongoCombinedFunction('getall').then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
})

app.get('/task/:Id', (req, res) => {
  var id = req.params['Id']
  mongoF.mongoCombinedFunction('getone',id).then((result) => {
      res.status(200).json(result);
  }).catch((err) => {
      res.status(500).send(err);
  })    
})

app.get('/delete/:Id', function (req, res) {
  var id = req.params['Id']
  mongoF.mongoCombinedFunction('delete',id).then((result) => {
      res.status(200).json(result);
  }).catch((err) => {
      res.status(500).send(err);
  })
})

app.get('/insert/:task', function (req, res) {  
  var task = req.params['task']
  mongoF.mongoCombinedFunction('insert',null,task).then((result) => {
      res.status(200).json(result);
  }).catch((err) => {
      res.status(500).send(err);
  })
})

app.get('/update/id/:Id/task/:task', function (req, res) {
  var id = req.params['Id']
  var task = req.params['task']
  mongoF.mongoCombinedFunction('update',id,task).then((result) => {
      res.status(200).json(result);
  }).catch((err) => {
      res.status(500).send(err);
  })
})

console.log(mongoF.mongoCombinedFunction('koko'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))