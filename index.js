const express = require('express');
const path = require('path')
const dotenv = require('dotenv').config();
const  { generateImage } =require('../AI-image-generator/controllers/openaiController');
const port = process.env.PORT || 5000;

const app = express();

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname,'public')))


app.use('/openai', require('./routes/openaiRoutes.js'));

app.listen(port,()=> console.log(`Server Started on Port ${port}`));