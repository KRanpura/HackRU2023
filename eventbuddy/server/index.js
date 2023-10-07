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

app.get("/users/getUsers", (req, res) => { 
    UserModel.find({}, (err, result) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
});

app.post("/users/createUser", async (req, res) => {  
    try {
      const user = req.body;
      const newUser = new UserModel(user);
      await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({message: "Failed to create user", error: error });
    }
});

app.put("/users/addUserEvent", async (req, res) => {
    try {
        const event = req.body;
        const user = req.body;

    } catch (error) {
        
    }
})


app.listen(port, () => {
    console.log("SERVER RUNS")
});