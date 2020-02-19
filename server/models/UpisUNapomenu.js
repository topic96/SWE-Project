const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ucenik = require('../models/Ucenik');
let profesor = require('../models/Profesor');
let napomena = require('../models/Napomena');

let upisUNapomenuSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    listaNapomena: {type: Schema.Types.ObjectId, ref: 'napomena'},
    listaUcenika : {type: Schema.Types.ObjectId, ref: 'ucenik'},
    listaProfesora : {type: Schema.Types.ObjectId, ref: 'profesor'}
},{collection:'napomena'});

module.exports = mongoose.model('UpisUnapomenu',upisUNapomenuSchema);