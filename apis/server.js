const app = require('./app');

const port = 5000;

app.listen(port, (err) => {
  if(err){
    console.log("ERROR OCCOURED", err);
  }
  console.log(`Server Listening NOW AT: ${process.env.API_SERVICE_URL}`);
});