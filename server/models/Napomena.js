const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let napomena = require('../models/UpisUNapomenu');

var napomenaSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    opis : String,
    Datum : Date,
    listaNapomena : [{type: Schema.Types.ObjectId, ref: 'napomena'}]
},{collection: 'napomena'});

module.exports = mongoose.model('Napomena',napomenaSchema);