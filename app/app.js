const express = require('express');
const app = express();
const port = 8080;

const version = process.env.VERSION || 'v1';  // version from environment variable

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', version: version });
});

app.get('/', (req, res) => {
  res.send(`App Version: ${version}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

