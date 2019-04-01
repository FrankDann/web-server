const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => res.send('Hello Mankato!'));

app.listen(port);
