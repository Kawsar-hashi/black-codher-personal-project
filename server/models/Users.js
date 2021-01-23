const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  location: String,
  user_name: String,
  times_played: Number,
  score: Number,
});

mongoose.model('users', userSchema);
