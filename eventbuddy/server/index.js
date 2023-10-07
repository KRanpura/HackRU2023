require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');

app.use(express.json());
app.use(cors());
const port = process.env.PORT 
const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(
    mongodb_url
);
