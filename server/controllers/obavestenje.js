const  mongoose=require('mongoose');
const Obavestenje = require('../models/Obavestenje');

exports.getObavestenje = function (req,res,next) {
    Obavestenje.find()
    .populate('ProfObavestava','ime')
    .exec()
        .then(user=> {
            console.log(user.title);
        res.json(user)}
    );
};

exports.postObavestenje=function (req,res,next) {
  const obavestenje=new Obavestenje({
      _id: new mongoose.Types.ObjectId()
  });
  for(const key in req.body){
      obavestenje[key]=req.body[key];
  }
  obavestenje.save()
      .then(result=>{
          console.log(result);
          res.status(201).json({
              message: 'Handling POST request to /obavestenje',
              createPost: result
          });
      })
      .catch(err=>{
          console.log(err);
          res.status(500).json({
              error:err
          });
      });
};

exports.updateObavestenje = function (req,res,next) {
    const id=req.params.obavestenjeId;
    const newObavestenje={};
    for(const key in req.body){
        newObavestenje[key]=req.body[key];
    }
    Obavestenje.update({_id:id},{$set: newObavestenje})
        .exec()
        .then(result=>{
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
};

