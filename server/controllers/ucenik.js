const mongoose = require('mongoose');
//let autoIncrement = require('mongoose-auto-increment');
const Ucenik = require('../models/Ucenik');

exports.getUcenik = function (req, res, next) {
    Ucenik.find()
        .populate('odeljenje', 'naziv')
        .then(user => res.json(user));
};

exports.getUcenikById = function (req, res, next) {
    const id = req.params.ucenikId;
    Ucenik.findById(id)
        .populate('roditelj', 'ime')
        .populate('odeljenje', 'naziv')
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.postUcenik = function (req, res, next) {
    // const ucenik = new Ucenik({
    //     _id: new mongoose.Types.ObjectId(),
    //     ime: {
    //         licnoIme: req.body.licnoIme,
    //         srednjeIme: req.body.srednjeIme,
    //         prezime: req.body.prezime
    //     },
    //     JMBG: req.body.JMBG,
    //     indexUcenika: req.body.indexUcenika,
    //     datumRodjenja: req.body.datumRodjenja,
    //     adresaStanovanja:{
    //         ulica: req.body.ulica,
    //         broj: req.body.broj
    //     },
    //     imeRoditelja: req.body.imeRoditelja,
    //     mestoStanovanja: req.body.mestoStanovanja,
    //     e_mail: req.body.e_mail,
    //     userName: req.body.userName,
    //     password: req.body.password,
    //     pol: req.body.pol,
    //     neopravdaniCasovi: req.body.neopravdaniCasovi,
    //     opravdaniCasovi: req.body.opravdaniCasovi
    // });
    const ucenik = new Ucenik({
        _id: new mongoose.Types.ObjectId()
    });
    for (const key in req.body) {
        ucenik[key] = req.body[key];
    }

    ucenik.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /ucenik',
                createUcenik: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updateUcenik = function (req, res, next) {
    const id = req.params.ucenikId;
    const newUcenik = {};
    for (const key in req.body) {
        newUcenik[key] = req.body[key];
    }
    Ucenik.update({_id: id}, {$set: newUcenik})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.deleteUcenik = function (req, res, next) {
    const id = req.params.ucenikId;
    Ucenik.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

/*JSON ZA UNOS
* {
	"ime":{
	"licnoIme":"Milan",
	"srednjeIme":"Miodrag",
	"prezime":"Topic"},
	"jmbg":"256985698569856",
	"indexUcenika":3,
	"datumRodjenja":"2010-01-03",
	"adresaStanovanja":{
	"ulica":"Obelicev venac",
	"broj":3},
	"mestoStanovanja":"Nis",
	"e_mail":"milantopic1@gmail",
	"userName":"Milan",
	"password":"Milan123",
	"pol":"M",
	"neopravdaniCasovi":0,
	"opravdaniCasovi":0
}*/
