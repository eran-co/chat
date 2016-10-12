var express = require('express');
const router = express.Router();
const User = require('./models/User');
const JWT = require('jsonwebtoken');


router.get('/', (req, res) => {
    res.send('home page');
});

router.get('/login', (req, res) => {
    res.send('login');
});

router.post('/login', (req, res) => {
  var userName = req.body.userName;
  User.getUser(
        userName,
        user => {
            // todo remove hack
            if (userName === 'eran' || user && user.password === req.body.password) {
                //TODO send token here
                const myToken = JWT.sign({user: userName}, 'lalakuku');
                res.cookie('authorization', myToken, { maxAge: 900000, httpOnly: true });
                res.json({token: myToken});
            } else {
                res.status(401).send('authentication error');
            }
        },
        error => res.status(500).send(error)
    );
});

router.get('/user', (req, res) => {
    User.getUser(
        'eran',
        user => res.send(user),
        error => res.status(500).send(error)
    );
});

module.exports = router;
