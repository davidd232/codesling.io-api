const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
const mongoDB = mongoose.connection;
const { Schema } = mongoose;

mongoDB.once('connected', () => {
  console.log('Connected to mongoose database');
});

const messageSchema = new Schema({
  message: String,
  username: String,
  roomname: String,
});

const Messages = mongoose.model('Messages', messageSchema);

// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });