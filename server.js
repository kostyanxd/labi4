const express = require('express');
const request = require('request');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
}); 

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
});

app.get('/server', (req, res) => {
  const polynomial = req.query.polynomial;
  const apiUrl = `https://newton.vercel.app/api/v2/factor/${polynomial}`;

  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const result = JSON.parse(body).result;
      res.send(result);
    } else {
      res.send('Error!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});