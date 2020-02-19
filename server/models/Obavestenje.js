const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Profesor = require('./Profesor');


let obavestenjeSema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nazivObavestenja: String,
    bodyObavestenje: String,
    datumPostavljanja: Date,
    ProfObavestava:{type:Schema.Types.ObjectId, ref:'Profesor'},
    imeProfesora: String
}, {collection: 'obavestenje'});

module.exports = mongoose.model('Obavestenje',obavestenjeSema);

