const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const urlRoutes = require('./routes/urlRoutes');
const baseRoutes = require('./routes/baseRoutes');
const {connectDB} = require('./dbConnection');

//Middleware
app.set('view engine', 'ejs');
app.use(express.json());
connectDB();


//Routes
app.use('/',baseRoutes);
app.use('/url',urlRoutes);

//Server
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error',err => {console.log(err)})