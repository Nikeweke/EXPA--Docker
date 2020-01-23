const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('How are you doing');
});

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


