const mongoose = require('mongoose');
const Forum = require('../models/Forum');
const ForumOdgovor = require('../models/ForumOdgovor');
var ObjectId = require('mongodb').ObjectId;

exports.getForum = function (req, res, next) {
    Forum.find().sort({ datumPostavljanja : -1 })
    .populate('autor','ime')
    .exec()
        .then(user=>{
            console.log(user.title);
        res.json(user)
        })
};

exports.getForumById = function (req, res, next) {
    const id = req.params.id;
    const bool = req.params.incdec;
    if (bool == 1){
        Forum.findById(id)
        .update({$inc:{brojOdgovora:1}})
        .then(user=>{
            res.json(user)
        })
    }
    else{
        Forum.findById(id)
        .update({$inc:{brojOdgovora:-1}})
        .then(user=>{
            res.json(user)
        })
    }
}

exports.deleteForumById = function (req, res, next){
    const id = req.params.id;
    ForumOdgovor.remove({forumPost: ObjectId(id)}).exec();
    Forum.deleteOne({_id: ObjectId(id)})
    .exec()
    .then(user=>{
        res.json(user)
    })
}

/*exports.getForumById = function (req, res, next){
    const id = req.params.parentId;
    Forum.find({forumPost: id})
    .populate('autor','ime')
    //.exec()
        .then(user=>{
            console.log(user.title);
        res.json(user)
        })
}*/

exports.postForum = function (req,res,next) {
    const forum=new Forum({
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