const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ucenik = require('../models/Ucenik');

let opravdanjeSchema= new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    opis : String,
    datumOd: Date,
    datumDo: Date,
    komentar: String,
    listaUcenika: [{type: Schema.Types.ObjectId, ref: 'ucenik'}]
},{collection: 'opravdanje'});



module.exports = mongoose.model('Opravdanje', opravdanjeSchema);