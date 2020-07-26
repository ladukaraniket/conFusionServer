const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the leaders');
    })
    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the leaders');
    });


leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the leader with id:' + req.params.leaderId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported at /leaders/' + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.write('Updating the leader with id: ' + req.params.leaderId);
        res.end('\nWill update leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting the leader with id: ' + req.params.leaderId);
    });



module.exports = leaderRouter;