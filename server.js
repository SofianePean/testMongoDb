const express = require('express');

// Express 
const server = express();
const PORT = process.env.PORT || 3001;

server.get('/', (req,res) => {
    res.send('test')
});

server.listen(PORT, () => {
    console.log(`server ok sur le port ${PORT}`);
  });