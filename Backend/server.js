const express = require('express') // import express
const mongoose = require('mongoose') // import mongoose
const cors = require('cors') // import cors
require('dotenv').config() // import dotenv
const studentRoutes = require('./routes/students.js') // import routes

const app = express() // create express app
const PORT = process.env.port || 7070; // set port

app.use(cors()) // use cors
app.use(express.json()) // use express json

// connect to mongodb
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.use("/student", studentRoutes);

app.listen(PORT, ()=> console.log(`server is up and running on port : ${PORT}`))
