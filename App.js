const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());


//Settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);


//MiddleWares


app.use(morgan('dev'));
app.use(express.urlencoded({limit: '15mbe',extended: true}));
app.use(express.json({limit: '15mb', extended:true}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(require('./router'))

app.listen(app.get('port'), () =>{
    console.log(`Server on port ${4000}`);
});