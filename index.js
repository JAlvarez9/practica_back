const express = require('express')
const app = express()
const cors = require('cors')

var corsOptions = {
    origin: true, 
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

app.use(require('./routes'))

app.listen(3001, () => {
    console.log('localhost:3001');
});