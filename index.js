const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello api is working');
});

app.listen(port, () => {
    console.log('server is running on :$(port)');
});
