const mongoose = require('mongoose');
const Profesor = require('../models/Profesor');

exports.getProfesor = function (req, res, next) {
    Profesor.find()
    .populate('predmet', 'naziv')
    .then( user => {
        res.json(user);
    });
};

exports.getProfesorById = function(req, res, next){
    const id = req.params.profesorId;
    Profesor.findById(id)
        .populate('razredniStaresina', 'naziv')
        .populate('predmet', 'naziv')
        .exec()
        .then(doc =>{
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

exports.postProfesor = function (req, res, next) {
    // const profesor = new Profesor({
    //     _id: new mongoose.Types.ObjectId(),
    //     ime: {
    //         licnoIme: req.body.licnoIme,
    //         srednjeIme: req.body.srednjeIme,
    //         prezime: req.body.prezime
    //     },
    //     JMBG: req.body.JMBG,
    //     datumRodjenja: req.body.datumRodjenja,
    //     adresaStanovanja: {
    //         ulica: req.body.ulica,
    //         broj: req.body.broj
    //     },
    //     mestoStanovanja: req.body.mestoStanovanja,
    //     e_mail: req.body.e_mail,
    //     userName: req.body.userName,
    //     password: req.body.password,
    //     pol: req.body.pol,
    //     strucnaSprema: req.body.strucnaSprema,
    //     tipProfesora: req.body.tipProfesora
    // });
    const profesor = new Profesor({
       _id: new mongoose.Types.ObjectId()
    });
    for(const key in req.body){
        profesor[key] = req.body[key];
    }
    profesor.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /profesor',
                createProfesor: result
            });
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.updateProfesor = function (req, res, next) {
    const id = req.params.profesorId;
    const newProfesor ={};
    for(const key in req.body){
        newProfesor[key] = req.body[key];
    }
    Profesor.update({_id:id}, {$set: newProfesor})
        .exec()
        .then(result =>{
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.deleteProfesor = function (req, res, next) {
    const id = req.params.profesorId;
    Profesor.remove({_id: id})
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
