const express = require('express');
const app = express();

const request = require('request-promise');
// const cors = require('cors');
// app.use(cors());

app.set("port", process.env.PORT || 3001);

app.get('/starred/:name', (req, response) => {
  const uri = `https://api.github.com/users/${req.params.name}/starred`;
  request({
    uri: uri,
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  }).then((data) => {
    response.send(data);
  }).catch((err) => {
    response.status(500).send(JSON.parse(err.error));
  });
});

app.get('/users/:name', (req, response) => {
  const uri = `https://api.github.com/users/${req.params.name}`;
  request({
    uri: uri,
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  }).then((data) => {
    response.send(data);
  }).catch((err) => {
    response.status(500).send(JSON.parse(err.error));
  });
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
