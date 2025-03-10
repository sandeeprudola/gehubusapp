const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

function connectodb() {
    console.log("Connecting to:", process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Database connected');
        })
        .catch((err) => {
            console.error('Connection error:', err);
        });
}

module.exports = connectodb;
