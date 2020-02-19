const mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');
const Cas = require('../models/Cas');

exports.getCas = function (req, res) {
    Cas.find()
        .then(user => res.json(user));
};

exports.getCasById = function (req, res, next) {
    const id = req.params.casId;
    Cas.findById(id)
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

exports.postCas = function (req,res,next) {
    // _id: mongoose.Schema.Types.ObjectId,
    //     datum: Date,
    //     redniBroj : Number,
    //     idRasporeda : [{type: mongoose.Schema.Types.ObjectId, ref: 'raspored'}],
    //     listOcena: [{type: mongoose.Schema.Types.ObjectId, ref: 'ocene'}]

    const cas = new Cas({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        cas[key] = req.body[key];
    }

    cas.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /cas',
                createCas: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updateCas = function (req, res, next) {
    const id = req.params.casId;
    const newCas = {};
    for (const key in req.body) {
        newCas[key] = req.body[key];
    }
    Cas.update({_id: id}, {$set: newCas})
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

exports.deleteCas = function (req, res, next) {
    const id = req.params.casId;
    Cas.remove({_id: id})
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