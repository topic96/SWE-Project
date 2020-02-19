var express = require('express');
const mongoose = require('mongoose');
const Ucenik = require('../models/Ucenik');
const Odeljenje = require('../models/Odeljenje');
var router = express.Router();

//Ovo je proba da se vidi da li rade rute
router.route('/about')
    .get(function (req,res) {
        res.send('about');
    });

router.route('/:idOdeljenje')
    .get(function (req,res,next) {
        const id = req.params.idOdeljenje;
        Odeljenje.findById(id)
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


    });

router.route('/vratiOdeljenje/:idUcenik')
    .get(function (req,res,next) {
        //var idOdeljenja;
        const id=req.params.idUcenik;
        Ucenik.findById(id)
            .exec()
            .then(doc=>{
                console.log(doc);
                console.log(doc.odeljenje);
                Odeljenje.findById(doc.odeljenje)
                    .exec()
                    .then(doc1=>{
                        console.log(doc1);
                        console.log(doc1.naziv);
                        res.status(200).json(doc1.naziv);
                    })
                    .catch(err=>{
                        console.log(err)
                    });
            })
            .catch(err=>{
               console.log(err);
               res.status(500).json({
                  error:err
               });
            });

    });



module.exports = router;
