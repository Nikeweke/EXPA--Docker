const express = require('express');
const redis = require('redis')

const app = express();
const client = redis.createClient({
  host: 'redis-server', // name of service from docker-compose,
  port: 6379 // default port of redis (you can comment it - its optional here)
})

client.set('visits', 0)

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send({
      visits
    })
    client.set('visits', parseInt(visits)+1)
  })
});

const PORT = 8000
app.listen(PORT, () => {
  console.log('Listening on port 8080');
});


