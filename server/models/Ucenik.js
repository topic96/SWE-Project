const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const autoIncrement = require('mongoose-auto-increment');
let Odeljenje = require('./Odeljenje');
let Roditelj = require('./Roditelj');
let Ocene = require('./Ocene');
let Napomena = require('./UpisUNapomenu');
let Opravdanje = require('./Opravdanje');

let ucenikSchema = new Schema({
    _id: Schema.Types.ObjectId,
    ime: {
        licnoIme: String,
        srednjeIme: String,
        prezime: String
    },
    JMBG: String,
    indexUcenika: Number,
    datumRodjenja: Date,
    adresaStanovanja: {
        ulica: String,
        broj: Number
    },
    roditelj: { type: Schema.Types.ObjectId, ref: 'Roditelj' },
    mestoStanovanja: String,
    userName: String,
    password: {type: String, required: true},
    pol: String,
    neopravdaniCasovi: Number,
    opravdaniCasovi: Number,
    odeljenje:  { type: Schema.Types.ObjectId, ref: 'Odeljenje' },
    listaOcena: [{type: Schema.Types.ObjectId, ref: 'Ocene'}],
    listNapomena: [{type: Schema.Types.ObjectId, ref: 'Napomena'}],
    opravdanje: {type: Schema.Types.ObjectId, ref: 'Opravdanje'}
}, { collection: 'ucenik' });

module.exports = mongoose.model('Ucenik', ucenikSchema);

// autoIncrement.initialize(mongoose.connection);
// ucenikSchema.plugin(autoIncrement.plugin,{
//     model: 'ucenikSchema',
//     field : 'indexUcenika',
//     startAt: 1,
//     incrementBy: 1
// });

//VIDETI ZA ADMINA!!!!!