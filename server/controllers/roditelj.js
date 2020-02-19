const mongoose = require('mongoose');
const Roditelj = require('../models/Roditelj');


exports.getRoditelj = function (req, res, next) {
    Roditelj.find()
        .then(user => res.json(user));
};

exports.getRoditeljById = function (req, res, next) {
    const id = req.params.roditeljId;
    Roditelj.findById(id)
        .populate('deca', 'ime')
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

exports.postRoditelj = function (req, res, next) {
    const roditelj = new Roditelj({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        roditelj[key] = req.body[key];
    }

    roditelj.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /ucenik',
                createRoditelj: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updateRoditelj = function (req, res, next) {
    const id = req.params.roditeljId;
    const newRoditelj = {};
    for (const key in req.body) {
        newRoditelj[key] = req.body[key];
    }
    Roditelj.update({_id: id}, {$set: newRoditelj})
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

exports.deleteRoditelj = function (req, res, next) {
    const id = req.params.roditeljId;
    Roditelj.remove({_id: id})
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