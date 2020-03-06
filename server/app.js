// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/index');

const app = express();
app.use(cors());
app.use(bodyParser.json());



// Express route handlers

app.get('/', (req, res) => {
  res.send('Hi');
});


app.use('/v1', routes);
app.use('*', (req, res)=>{
  res.status(500).send({message: "Something went wrong !"})
})

module.exports = app;