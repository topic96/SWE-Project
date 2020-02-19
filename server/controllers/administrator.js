const mongoose = require('mongoose');
const Administrator = require('../models/Administrator');
var ObjectId = require("mongodb").ObjectId;

exports.getAdministrator = function (req, res, next) {
    Administrator.find().then( user => {
        res.json(user);
    });
};

exports.getAdministratorById = function (req, res, next) {
    const id = req.params.administratorId;
    Administrator.findById(id)
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

exports.updateAdministrator = function (req, res, next) {
    const id = req.params.administratorId;
    const newAdmin = {};
    for (const key in req.body) {
        newAdmin[key] = req.body[key];
    }
    Administrator.update({_id: id}, {$set: newAdmin})
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

exports.postAdministrator = function (req, res, next) {
    const administrator = new Administrator({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        administrator[key] = req.body[key];
    }

    administrator.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /administrator',
                createAdministrator: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.deleteAdministrator=function(req, res, next)
{
    const id = req.params.administratorId;
    Administrator.remove({_id:ObjectId(id)})
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