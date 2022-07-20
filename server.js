const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
require("dotenv").config();

//init middleware
app.use(express.json())

app.use(cors());

//connect mongodb
connectDB();

app.use('/api/user', require('./routes/auth'))

if (process?.env?.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});