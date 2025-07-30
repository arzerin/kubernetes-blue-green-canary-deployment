// app/app.js
const express = require('express');
const app = express();
const port = 8080;

const version = process.env.VERSION || 'v1';  // version from environment variable

app.get('/', (req, res) => {
  res.send(`App Version: ${version}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

