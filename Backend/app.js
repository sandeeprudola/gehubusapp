const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const server = require('./server'); // Import the server
const app = server.app; // Get the Express app from server.js
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectodb = require('./db/db');
const userroutes = require('./routes/user.routes');
const captainroutes = require('./routes/captain.routes');
connectodb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('hello');
});
app.use('/users', userroutes);
app.use('/captains', captainroutes);
module.exports = app;