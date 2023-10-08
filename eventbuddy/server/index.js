require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');
const EventModel = require('./models/Events');
const accountSid = process.env.accountSID;
const authToken = process.env.twilioAuth;
const twilioNumber = process.env.twilioNumber;
const phoneNumber = process.env.phoneNumber;
const { v4: uuidv4 } = require('uuid'); //make sure to import this
const client = require('twilio')(accountSid, authToken);
const { MessagingResponse } = require('twilio').twiml;

app.use(express.json());
app.use(cors());
const port = process.env.PORT 
const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(
    mongodb_url
);

//gives us a list of all users
app.get("/users/getUsers", (req, res) => { 
    UserModel.find({}, (err, result) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(result);
        }
    });
});
app.post("/sms/:message", async (req, res) => {
   const message = req.params;
   client.messages
   .create({
     body: message.message,
      from: twilioNumber,
      to: phoneNumber
    })
   .then(message => console.log(message.sid));
   res.status(200).json(message.message);
 })
//creates a new user
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
app.get("/events/getUserEvents/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;
    const userEvents = await EventModel.find({ attendees: userEmail });

    res.status(200).json(userEvents);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user events", error: error });
  }
})
app.get("/events/getCreatorEvents/:email", async (req,res) => {
  try {
    const userEmail = req.params.email;

    // Find events created by the user
    const creatorEvents = await EventModel.find({ creator: userEmail });

    res.status(200).json(creatorEvents);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch creator events", error: error });
  }
});
//create event with name, description, etc.
app.post("/events/createEvent", async (req, res) => { 
    try {
      const event = req.body;
      const newEvent = new EventModel(event);
      await newEvent.save();
      res.status(200).json(newEvent);
    } catch (error) {
      res.status(500).json({message: "Failed to create event", error: error });
    }
});

// Fetch and update user events using email/pass
app.put('/users/addUserEvent/:email/:password/:eventName', async (req, res) => { 
    const {email, password, eventName} = req.params;
    const user = await UserModel.findOne({email, password}).exec();
    if (!user) {
        return res.status(404).json({message: 'User not found' });
    }
    user.events.push(eventName);
    await user.save();
    res.status(200).json(user);
});

//updates attendees of an event
app.patch('/events/addEventAttendees/:email/:password/:id', async (req, res) => {
    const {email, password, id} = req.params;
    const event = await EventModel.findOne({id}).exec(); 
    if (!event) {
        return res.status(404).json({message: 'Event not found'});
    }
    if (!event.attendees.includes(email)) {
      // If not, push it to the attendees array
      event.attendees.push(email);
      await event.save();
  }
    res.status(200).json(email);
});

app.get("/events/getEvents/:interest", async (req, res) => {
    try {
      const { interest } = req.params; // Extract the interest parameter from the route
  
      // Create a query object with the filtering criteria
      const query = { interest }; // Using the extracted interest parameter
  
      const result = await EventModel.find(query);
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  });
app.listen(port, () => {
    console.log("SERVER RUNS")
});