const mongoose = require('mongoose');

const myListSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  item_id: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('myList', myListSchema);