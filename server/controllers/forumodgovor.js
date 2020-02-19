const mongoose = require('mongoose');
const ForumOdgovor = require('../models/ForumOdgovor');
var ObjectId = require('mongodb').ObjectId;
const Forum = require('../models/Forum');

exports.getForumOdgovorById = function (req, res, next) {
    const id = req.params.parentId;
    ForumOdgovor
    .find(
        { "forumPost" : ObjectId(id)}
    ).sort({datumPostavljanja : -1})
    .populate('autor','ime')
    //.exec()
        .then(user=>{
            console.log(user.title);
        res.json(user)
        })
};

exports.getForumOdgovor = function (req, res, next) {
    ForumOdgovor.find().sort({datumPostavljanja : -1})
    .populate('autor', 'ime')
        .then(user=>{
            console.log(user.title);
            res.json(user)
        })
};

exports.deleteForumOdgovorById = function (req, res, next) {
    const id = req.params.parentId;
    const bool = req.params.bool;
    if (bool==0){
        ForumOdgovor.deleteOne({_id: ObjectId(id)})
        .then(user=>{
            res.json(user)
        })
    }
    else {
        ForumOdgovor.deleteMany({_id: ObjectId(id)})
        .then(user=>{
        res.json(user)
        })
    }
}
exports.postForumOdgovor = function (req,res,next) {
    const forum=new ForumOdgovor({
        _id: new mongoose.Types.ObjectId()
    });
    for(const key in req.body){
        forum[key]=req.body[key];
    }
    forum.save()
        .then(result=>{
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /forum',
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