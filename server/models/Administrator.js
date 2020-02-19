const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//let Odeljenje = require('./Odeljenje');
//let UpisUnapomenu = require('./UpisUNapomenu');
//let planIProgramNastave = require('./Plan_i_program');
//let Predmet = require('./Predmet');

let administratorSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ime: {
        licnoIme: String,
        srednjeIme: String,
        prezime: String
    },
    JMBG: String,
    //id: Number,
    datumRodjenja: Date,
    adresaStanovanja: {
        ulica: String,
        broj: Number
    },
    mestoStanovanja: String,
    userName: String,
    password: String,
    pol: String
}, { collection: 'administrator' });

module.exports = mongoose.model('administrator', administratorSchema);