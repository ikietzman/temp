'use strict'

const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  // _id: Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
    minLength: 4,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minLength: 6,
    trim: true
  },
  name: {
    type: String
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  created: {
    type: Date,
    default: Date.now()
  }
})

// let ideaScheme = mongoose.Schema({
//   // _id: Schema.Types.ObjectId,
//   title: {
//     type: String,
//     required: true,
//     minLength: 1
//   },
//   description: {
//     type: String
//   },
//   // user_id: { type: Schema.Types.ObjectId, ref: 'User' }
// });
//
// let primaryStep = mongoose.Schema({
//   // _id: Schema.Types.ObjectId,
//   title: {
//     type: String,
//     required: true,
//     minLength: 1
//   },
//   description: {
//     type: String
//   },
//   order: {
//     type: Number,
//     required: true
//   },
//   // idea_id: { type: Schema.Types.ObjectId, ref: 'Idea' },
//   // user_id: { type: Schema.Types.ObjectId, ref: 'User' }
// })
//
// let subStep = mongoose.Schema({
//   // _id: Schema.Types.ObjectId,
//   title: {
//     type: String,
//     required: true,
//     minLength: 1
//   },
//   description: {
//     type: String
//   },
//   order: {
//     type: Number,
//     required: true
//   },
//   // primary_id: { type: Schema.Types.ObjectId, ref: 'Primary' },
//   // idea_id: { type: Schema.Types.ObjectId, ref: 'Idea' },
//   // user_id: { type: Schema.Types.ObjectId, ref: 'User' }
// })

// let Substep = mongoose.model('Substep', subStep);
// let Primary = mongoose.model('Primary', primaryStep);
// let Idea = mongoose.model('Idea', ideaSchema);
let User = mongoose.model('User', userSchema);

module.exports = {User}

// module.exports = {User, Primary, Idea, Substep};
