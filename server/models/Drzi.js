const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let profesor = require('../models/Profesor');
let predmet = require('../models/Predmet');

let drziSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profesorID: {type: Schema.Types.ObjectId, ref: 'profesor'},
    predmetID: {type: Schema.Types.ObjectId, ref: 'predmet'}
},{collection: 'drzi'});

module.exports = mongoose.model('Drzi',drziSchema);