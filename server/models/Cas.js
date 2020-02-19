const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let autoIncrement = require('mongoose-auto-increment');
let raspored = require('./Raspored');
let ocene = require('./Ocene');

let casSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    datum: Date,
    redniBroj: Number,
    idRasporeda: [{type: mongoose.Schema.Types.ObjectId, ref: 'raspored'}],
    listOcena: [{type: mongoose.Schema.Types.ObjectId, ref: 'ocene'}]
}, { collection: 'cas' });

module.exports = mongoose.model('Cas', casSchema);

// autoIncrement.initialize(mongoose.connection);
// casSchema.plugin(autoIncrement.plugin,{
//     model : 'casSchema',
//     field : 'redniBroj',
//     startAt: 1,
//     incrementBy: 1
// });