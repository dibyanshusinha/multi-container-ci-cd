const router = require('express').Router();
const keys = require('./../keys');

// Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG connection !'));

pgClient.connect()
.then(() => {
  pgClient.query('CREATE TABLE IF NOT EXISTS values (number INT)').then(() => {});
}).catch((err) => {
    console.error(err);
});


// Redis Client Setup
const redis = require('redis');
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();


router.get('/values/all', async (req, res) => {
    const values = await pgClient.query('SELECT * from values');
  
    res.send(values.rows);
  });
  
  router.get('/values/current', async (req, res) => {
    redisClient.hgetall('values', (err, values) => {
      res.send(values);
    });
  });
  
  router.post('/values', async (req, res) => {
    const index = req.body.index;
  
    if (parseInt(index) > 40) {
      return res.status(422).send('Index too high');
    }
  
    redisClient.hset('values', index, 'Nothing yet!');
    redisPublisher.publish('insert', index);
    pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);
  
    res.send({ working: true });
  });


  module.exports = router;