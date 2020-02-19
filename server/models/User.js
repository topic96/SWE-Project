'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};


module.exports = mongoose.model('User', userSchema);