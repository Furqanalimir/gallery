const express = require('express');
const app = express();
const connectDB = require('./config/db');

//init middleware
app.use(express.json())

//connect mongodb
connectDB();

app.use('/api/user', require('./routes/auth'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});