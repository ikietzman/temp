'use strict'

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/users.js');

let app = express();
app.use(bodyParser.json());

//Create new user
app.post('/users', (req, res) => {
  console.log(req.body)
  res.send(req.body)
  // let newUser = new User({
  //   username: 'TestAccount',
  //   email: 'test@testing.com',
  //   name: 'Tester',
  //   password: 'test123'
  // });
  // console.log(newUser)
  // newUser.save()
  //   .then((doc) => {
  //     res.send(doc);
  //     console.log('user added!')
  //   }, (err) => {
  //     res.status(400).send(`UHOH: ${err}`);
  //   })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
