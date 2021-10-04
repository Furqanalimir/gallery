const mongoose = require('mongoose');

const wishListSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('wishList', wishListSchema);