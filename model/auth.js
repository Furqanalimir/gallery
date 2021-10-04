const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
