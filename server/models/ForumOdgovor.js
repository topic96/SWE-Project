const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Profesor = require('./Profesor');
let Forum = require('./Forum');


let forumOdgovorSchema = new Schema({
    _id: Schema.Types.ObjectId,
    tekst: String,
    autor: { type: Schema.Types.ObjectId, ref: 'Profesor' },
    forumPost: { type: Schema.Types.ObjectId, ref: 'Forum' },
    datumPostavljanja: Date
}, { collection: 'forumodgovor' });

module.exports = mongoose.model('ForumOdgovor', forumOdgovorSchema);