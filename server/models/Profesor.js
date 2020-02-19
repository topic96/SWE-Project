const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Odeljenje = require('./Odeljenje');
let UpisUnapomenu = require('./UpisUNapomenu');
let planIProgramNastave = require('./Plan_i_program');
let Predmet = require('./Predmet');

let profesorSchema = new Schema({
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
    pol: String,
    strucnaSprema: String,
    tipProfesora: String,
    listaNapomena: [{type: Schema.Types.ObjectId, ref: 'UpisUnapomenu'}],
    listaPlanaIProgramaNastave: [{type: Schema.Types.ObjectId, ref: 'planIProgramNastave'}],
    razredniStaresina: { type: Schema.Types.ObjectId, ref: 'Odeljenje' },
    odeljenja: [{ type: Schema.Types.ObjectId, ref: 'Odeljenje' }],
    predmet:{type: Schema.Types.ObjectId, ref: 'Predmet'}
}, { collection: 'profesor' });

module.exports = mongoose.model('Profesor', profesorSchema);

//Za dodavanje podataka u bazu
// {
//     "ime":{
//     "licnoIme":"Nela",
//         "srednjeIme":"Miodrag",
//         "prezime":"Spasojevic"},
//     "jmbg":"269856669856",
//     "datumRodjenja":"1973-01-03",
//     "adresaStanovanja":{
//     "ulica":"Vrnjacka banja bb",
//         "broj":0},
//     "mestoStanovanja":"Vrnjacka banja",
//     "e_mail":"nelasp1@gmail",
//     "userName":"NelaSpasojevic",
//     "password":"Nela123",
//     "pol":"M",
//     "strucnaSprema":"Diplomirani matematicar",
//     "tipProfesora":"Predavac"
// }