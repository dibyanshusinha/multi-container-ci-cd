// const keys = require('env.js');
//Can require db config to instanciate  such as env.js> process.env.ABC=2000 | without any formating
const app = require('./app');

app.listen(5000, err => {
  console.log('Server Listening');
});
