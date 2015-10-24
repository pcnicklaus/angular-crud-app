var express = require('express');
var router = express.Router();
var Food = require('../models/food.js');

router.get('/foods', function (req, res, next) {
    Food.find(function (err, data) {
        if (err) {
            res.json({
                'message': err
            })
        } else {
            res.json(data);
        }
    })
});

router.get('/food/:id', function (req, res, next) {
    Food.findById(req.params.id, function (err, data) {
        if (err) {
            res.json({
                'message': err
            })
        } else {
            res.json(data);
        }
    })
});

router.post('/foods', function (req, res, next) {
    newFood = new Food({
        name: req.body.name,
        sentiment: req.body.sentiment,
        tweets: req.body.tweets
    })
    newFood.save(function (err, data) {
        if (err) {
            res.json({
                'message': err
            })
        } else {
            res.json(data);
        }
    })
})

router.put('/food/:id', function (req, res, next) {
    var update = {
        name: req.body.name,
        sentiment: req.body.sentiment,
        tweets: req.body.tweets
    }
    Food.findByIdAndUpdate(req.params.id, update, function (err, data) {
        if (err) {
            res.json({
                'message': error
            });
        } else {
            res.json(data);
        }
    });
});

router.delete('/food/:id', function (req, res, next) {
    Food.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) {
            res.json({
                'message': err
            });
        } else {
            res.json(data);
        }
    })
})

module.exports = router;