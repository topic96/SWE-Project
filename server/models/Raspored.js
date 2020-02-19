let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let autoIncrement = require('mongoose-auto-increment');
let odeljenje = require('../models/Odeljenje');
let cas = require('../models/Cas');


let rasporedScema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idOdeljenja : {type: mongoose.Schema.Types.ObjectId, ref : 'odeljenje'},
    idCasa : {type: mongoose.Schema.Types.ObjectId, ref: 'cas'}
},{collection: 'raspored'});

module.exports = mongoose.model('Raspored', rasporedScema);