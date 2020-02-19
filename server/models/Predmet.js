const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Ocene = require('./Ocene');
let planIProgramNastave = require('./Plan_i_program');
let Profesor = require('./Profesor');

let predmetSchema = new Schema({
    _id: Schema.Types.ObjectId,
    naziv: String,
    opis: String
    //planIProgramId : {type: Schema.Types.ObjectId, ref: 'planIProgramNastave'},

}, { collection: 'predmet' });

module.exports = mongoose.model('Predmet', predmetSchema);