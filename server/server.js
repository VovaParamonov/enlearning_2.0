const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');


app.use(express.static(path.join(__dirname, '../public')));

http.listen(8080, () => {
    console.log('listening on *:8080');
});