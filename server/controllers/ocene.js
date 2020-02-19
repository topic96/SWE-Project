// _id: mongoose.Schema.Types.ObjectId,
//     ocenaVrednost : Number,
//     cas: {type: mongoose.Schema.Types.ObjectId, ref: 'cas'} ,
// ucenikOcena : {type: mongoose.Schema.Types.ObjectId, ref: 'ucenik'},
// predmetOcena : {type: mongoose.Schema.Types.ObjectId, ref:'predmet'}

const mongoose = require('mongoose');
const Ocene = require('../models/Ocene');

exports.getOcene = function (req, res) {
    Ocene.find()
        .then(user => res.json(user));
};
//neka ostane za sad dok nam ne sine ideja sta mozemo da uradimo