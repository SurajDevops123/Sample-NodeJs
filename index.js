const express = require('express');
const app = express();
const PORT = process.env.PORT || 3031;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => console.log(`Hello World app running on http://localhost:${PORT}`));
