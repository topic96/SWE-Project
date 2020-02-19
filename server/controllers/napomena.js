const mongoose = require('mongoose');
const Napomena = require('../models/Napomena');

exports.getNapomena = function (req, res) {
    Napomena.find()
        .then(user => res.json(user));
};

exports.getNapomenaById = function (req, res, next) {
    const id = req.params.napomenaId;
    Napomena.findById(id)
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

exports.postNapomena = function (req, res, next) {
    // var napomenaSchema = new Schema({
    //     _id: mongoose.Schema.Types.ObjectId,
    //     opis : String,
    //     Datum : Date,
    //     listaNapomena : [{type: Schema.Types.ObjectId, ref: 'napomena'}]
    const napomena = new Napomena({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        napomena[key] = req.body[key];
    }

    napomena.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /napomena',
                createNapomena: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updateNapomena = function (req, res, next) {
    const id = req.params.napomenaId;
    const newNapomena = {};
    for (const key in req.body) {
        newNapomena[key] = req.body[key];
    }
    Napomena.update({_id: id}, {$set: newNapomena})
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

exports.deleteNapomena = function (req, res, next) {
    const id = req.params.napomenaId;
    Napomena.remove({_id: id})
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