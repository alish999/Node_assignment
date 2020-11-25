const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const route = require('./routes/routes.js');


const app = express();

app.use(bodyParser.json());
app.use('/', route);


app.listen(port);