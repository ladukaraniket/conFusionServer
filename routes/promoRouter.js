const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promos');
    })
    .post((req, res, next) => {
        res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promos');
    });


promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the promo with id:' + req.params.promoId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported at /promos/' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.write('Updating the promo with id: ' + req.params.promoId);
        res.end('\nWill update promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting the promo with id: ' + req.params.promoId);
    });



module.exports = promoRouter;