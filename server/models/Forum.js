const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Profesor = require('./Profesor');


let forumSchema = new Schema({
    _id: Schema.Types.ObjectId,
    tema: String,
    datumPostavljanja: Date,
    tekst: String,
    brojOdgovora: Number,
    autor: { type: Schema.Types.ObjectId, ref: 'Profesor' }
}, { collection: 'forum' });

module.exports = mongoose.model('Forum', forumSchema);