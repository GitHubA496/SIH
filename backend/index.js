import express from 'express';
import mongoose from 'mongoose';
import Plant from './models/Plant.js'; // Assuming the Mongoose schema is in models/Plant.js

import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());

// MongoDB connection (update to your database and collection)
mongoose.connect('mongodb://localhost:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB in the "admin" database');
});

// Use the "hello" collection
const plantCollection = db.collection('hello');

// Create an endpoint to fetch plants
app.get('/plants', async (req, res) => {
  try {
    const plants = await plantCollection.find().toArray();  // Using the 'hello' collection
    res.json(plants);
  } catch (err) {
    console.error("All my fellas");
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
