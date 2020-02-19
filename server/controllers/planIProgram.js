const mongoose = require('mongoose');
const PlanIProgram = require('../models/Plan_i_program');

exports.getPlanIProgram = function (req, res) {
    PlanIProgram.find()
        .then(user => res.json(user));
};

exports.getPlanIProgramById = function (req, res, next) {
    const id = req.params.planiprogramId;
    PlanIProgram.findById(id)
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

exports.postPlanIProgram = function (req, res, next) {
    // _id: mongoose.Schema.Types.ObjectId,
    //     komentar:String,
    //     redniBrojNedelje:Number,
    //     nizPredmeta: [{type: Schema.Types.ObjectId, ref: 'predmet'}],
    //     profesorID: {type: Schema.Types.ObjectId, ref: 'profesor'}
    const planiprogram = new PlanIProgram({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        planiprogram[key] = req.body[key];
    }

    planiprogram.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /planiprogram',
                createPlanIProgram: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updatePlanIProgram = function (req, res, next) {
    const id = req.params.planiprogramId;
    const newplaniprogram = {};
    for (const key in req.body) {
        newplaniprogram[key] = req.body[key];
    }
    PlanIProgram.update({_id: id}, {$set: newplaniprogram})
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

exports.deletePlanIProgram = function (req, res, next) {
    const id = req.params.planiprogramId;
    PlanIProgram.remove({_id: id})
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