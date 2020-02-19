const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let predmet = require('../models/Predmet');
let profesor = require('../models/Profesor');

let planiprogramSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    komentar:String,
    redniBrojNedelje:Number,
    nizPredmeta: [{type: Schema.Types.ObjectId, ref: 'predmet'}],
    profesorID: {type: Schema.Types.ObjectId, ref: 'profesor'}
},{collection: 'planiprogram'});

module.exports = mongoose.model('PlanIProgram', planiprogramSchema);