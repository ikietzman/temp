'use strict'

//this file connects the this application/program to the mongo DB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/app-users', {useMongoClient: true});

module.exports = {mongoose};
