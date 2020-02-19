const mongoose = require('mongoose');
const Opravdanje = require('../models/Opravdanje');

exports.getOpravdanje = function (req, res) {
    Opravdanje.find()
        .then(user => res.json(user));
};

exports.getOpravdanjeById = function (req, res, next) {
    const id = req.params.opravdanjeId;
    Opravdanje.findById(id)
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

exports.postOpravdanje = function (req, res, next) {
    // _id: mongoose.Schema.Types.ObjectId,
    //     opis : String,
    //     datumOd: Date,
    //     datumDo: Date,
    //     komentar: String,
    //     listaUcenika: [{type: Schema.Types.ObjectId, ref: 'opravdanje'}]
    const opravdanje = new Opravdanje({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        opravdanje[key] = req.body[key];
    }

    opravdanje.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /opravdanje',
                createOpravdanje: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updateOpravdanje = function (req, res, next) {
    const id = req.params.opravdanjeId;
    const newOpravdanje = {};
    for (const key in req.body) {
        newOpravdanje[key] = req.body[key];
    }
    Opravdanje.update({_id: id}, {$set: newOpravdanje})
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

exports.deleteOpravdanje = function (req, res, next) {
    const id = req.params.opravdanjeId;
    Opravdanje.remove({_id: id})
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