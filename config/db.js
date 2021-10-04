const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
  try
  {
    await mongoose.connect(process.env.MONGO_URI, {})
    console.log('Mongodb Connected...')
  } catch (err)
  {
    console.log('error connecting to Mongo', err.message)
    process.exit(1);
  }
}

module.exports = connectDB;