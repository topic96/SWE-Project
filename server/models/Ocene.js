const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cas = require('../models/Cas');
let ucenik = require('../models/Ucenik');
let predmet = require('../models/Predmet');

let ocenaSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ocenaVrednost: Number,
    cas: {type: Schema.Types.ObjectId, ref: 'cas'},
    ucenikOcena: {type: Schema.Types.ObjectId, ref: 'ucenik'},
    predmetOcena : {type: Schema.Types.ObjectId, ref:'predmet'}
},{collection: 'ocene'});

module.exports = mongoose.model('Ocene', ocenaSchema);
