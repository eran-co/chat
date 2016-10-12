/*jslint plusplus: true, node: true */

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
const expressJWT = require('express-jwt');
const cookieParser = require('cookie-parser');

var app = express();
app.set('port', process.env.PORT || 9000);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(expressJWT({
    secret: 'lalakuku',
    getToken: function fromHeaderOrQuerystring (req) {
        if (req.cookies.authorization) {
            return req.cookies.authorization;
        }
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({path:['/login', '/']}));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
};

app.use(allowCrossDomain);

app.use('/', routes);

const port = app.get('port');
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
