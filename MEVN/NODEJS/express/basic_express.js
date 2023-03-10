const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
