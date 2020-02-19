const mongoose = require('mongoose');
const Predmet = require('../models/Predmet');

exports.getPredmet = function (req, res, next) {
    Predmet.find()
        .then(user => res.json(user));
};

exports.getPredmetById = function (req, res, next) {
    const id = req.params.predmetId;
    Predmet.findById(id)
        .populate('predavaci', 'ime')
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

exports.postPredmet = function (req, res, next) {
    const predmet = new Predmet({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        predmet[key] = req.body[key];
    }

    predmet.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /predmet',
                createPredmet: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updatePredmet = function (req, res, next) {
    const id = req.params.predmetId;
    const newPredmet = {};
    for (const key in req.body) {
        newPredmet[key] = req.body[key];
    }
    Predmet.update({_id: id}, {$set: newPredmet})
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

exports.deletePredmet = function (req, res, next) {
    const id = req.params.predmetId;
    Predmet.remove({_id: id})
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