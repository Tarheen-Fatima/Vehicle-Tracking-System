const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const locationData = require('./data.json');
let currentIndex = 0;

app.get('/location', (req, res) => {
  if (currentIndex >= locationData.length) {
    currentIndex = 0;  
  }
  res.json(locationData[currentIndex]);
  currentIndex++;
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
