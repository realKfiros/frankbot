require('./bot');
const express = require('express');
const app = express();
const port = process.env.PORT || 3015;

app.get('/', (req, res) => {
  res.send('FrankBot');
});

app.listen(port, () => {
  console.log(`Frankbot is listening at http://localhost:${port}/`);
});
