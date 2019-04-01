const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => res.send('Front End'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
