const express = require('express');
const app = express();
const port = 4000
const mongoose = require('mongoose')
var routes = require('./routes/eventRoutes');
const creationRoutes = require('./routes/creationRoutes');
const event = require("./src/eventcreation/eventModel");
const login = require("./src/people/peoplesService")
const cors = require('cors')
app.use(express.json());

app.use(cors(
  {
    origin: "http://localhost:4200"
  }
))

mongoose.connect('mongodb://localhost:27018/people', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    const router = express.Router()

        // for login
    app.post('/people/create', async (req, res) => {
      try {
          const response = await login.createPeopleDBService(req.body);
          res.status(response.status).json({ msg: response.msg, data: response.data || null });
      } catch (error) {
          res.status(500).json({ msg: error.msg || "Server error" });
      }
  });

// For login
app.post('/people/login', async (req, res) => {
  try {
      const response = await login.loginpeopleDBService(req.body);
      res.status(response.status).json({ msg: response.msg });
  } catch (error) {
      res.status(500).json({ msg: error.msg || "Server error" });
  }
});


// to get events

    app.get('/api/events', async (req, res) => {
      try {
          const events = await event.find(); 
          res.json(events); // Send events as JSON response
      } catch (error) {
          res.status(500).json({ message: error.message }); 
      }
  });

  


// To delete events
app.delete('/api/events/:id', async (req, res) => {
  try {
      const { id } = req.params; // 
      const deletedEvent = await event.findByIdAndDelete(id);

      if (!deletedEvent) {
          return res.status(404).json({ message: 'Event not found' }); 
      }
      res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// To update Events


// app.put('/api/events/:id', async (req, res) => {
//   try {
//       const { id } = req.params; 
//       const updateData = req.body; 

//       const updatedEvent = await event.findByIdAndUpdate(id, updateData, { new: true }); 

//       if (!updatedEvent) {
//           return res.status(404).json({ message: 'Event not found' }); 
//       }

//       res.status(200).json(updatedEvent); 
//   } catch (error) {
//       res.status(500).json({ message: error.message });
//   }
// });
app.put('/api/events/:id', async (req, res) => {
  try {
      const { id } = req.params;
      console.log('Request Params:', req.params);
      const { eventname, eventdate, eventtime, eventlocation, eventdescription } = req.body;

      if (!eventname || !eventdate || !eventtime || !eventlocation || !eventdescription) {
          return res.status(400).json({ message: 'All fields are required.' });
      }

      const updateData = { eventname, eventdate, eventtime, eventlocation, eventdescription };
      const updatedEvent = await event.findByIdAndUpdate(id, updateData, { new: true });

      if (!updatedEvent) {
          return res.status(404).json({ message: 'Event not found' });
      }

      res.status(200).json(updatedEvent);
  } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ message: error.message });
  }
});

// to get data to edit page
app.get('/api/events/:id', async (req, res) => {
  try {
      const id = req.params['id']
      console.log('id', id)
      const events = await event.findOne({_id: id})
      res.json(events); // Send events as JSON response
  } catch (error) {
      res.status(500).json({ message: error.message }); 
  }
});


    app.use(routes)
    app.use(creationRoutes); 
    

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
