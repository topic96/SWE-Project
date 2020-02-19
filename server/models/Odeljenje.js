const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const autoIncrement = require('mongoose-auto-increment');
let Ucenik = require('./Ucenik');
let Profesor = require('./Profesor');
let Raspored = require('./Raspored');

let odeljenjeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    naziv: {
        godina:String,
        broj: String
    },
    smer: String,
    brojUcenika: Number,
    RasporedCasovaOdeljenja: [{type: Schema.Types.ObjectId, ref: 'Raspored'}],
    razredniStaresina: { type: Schema.Types.ObjectId, ref: 'Profesor' }
}, { collection: 'odeljenje' });

module.exports = mongoose.model('Odeljenje', odeljenjeSchema);

//autoIncrement.initialize(mongoose.connection);
// odeljenjeSchema.plugin(autoIncrement.plugin,{
//     model: 'odeljenjeSchema',
//     field : 'brojUcenika',
//     startAt: 1,
//     incrementBy: 1
// });
//pri cuvanju ispitati broj ucenika