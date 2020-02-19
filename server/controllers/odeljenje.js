const mongoose = require('mongoose');
const Odeljenje = require('../models/Odeljenje');

// let odeljenjeObjekat = new Odeljenje({
//     _id: mongoose.Types.ObjectId(),
//     naziv : "I3",
//     smer : "Prirodno-matematicki"
// });

exports.getOdeljenje = function (req, res, next) {
    Odeljenje.find()
    .populate('razredniStaresina', 'ime')
    .then(user => {
        res.json(user);
    })
};

exports.getOdeljenjeById = function (req, res, next) {
    const id = req.params.odeljenjeId;
    Odeljenje.findById(id)
        .populate('ucenici', 'ime')
        .populate('razredniStaresina', 'ime')
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.postOdeljenje = function (req, res, next) {
    const odeljenje = new Odeljenje({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        odeljenje[key] = req.body[key];
    }

    odeljenje.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /odeljenje',
                createOdeljenje: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updateOdeljenje = function (req, res, next) {
    const id = req.params.odeljenjeId;
    const newOdeljenje = {};
    for (const key in req.body) {
        newOdeljenje[key] = req.body[key];
    }
    Odeljenje.update({_id: id}, {$set: newOdeljenje})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.deleteOdeljenje = function (req,res,next) {
    const id = req.params.odeljenjeId;
    Odeljenje.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};