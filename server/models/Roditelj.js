const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Ucenik = require('./Ucenik');

let roditeljSchema = new Schema({
    _id: Schema.Types.ObjectId,
    ime: {
        licnoIme: String,
        srednjeIme: String,
        prezime: String
    },
    JMBG: String,
    datumRodjenja: Date,
    adresaStanovanja: {
        ulica: String,
        broj: Number
    },
    mestoStanovanja: String,
    userName: String,
    password: String,
    pol: String,
    deca: [{ type: Schema.Types.ObjectId, ref: 'Ucenik' }]
}, { collection: 'roditelj' });

module.exports = mongoose.model('Roditelj', roditeljSchema);