const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import routes
const fightRoutes = require('./routes/fights');
const mealRoutes = require('./routes/meals');
const placeRoutes = require('./routes/places');
const movieSeriesRoutes = require('./routes/movieseries');
const dailySongRoutes = require('./routes/dailysongs');
const hangoutPartyRoutes = require('./routes/hangoutparties');
const specialEventRoutes = require('./routes/specialevents');
const longDistanceRoutes = require('./routes/longdistances');
const summaryRoutes = require('./routes/summary');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/fights', fightRoutes);
app.use('/meals', mealRoutes);
app.use('/places', placeRoutes);
app.use('/movieseries', movieSeriesRoutes);
app.use('/dailysongs', dailySongRoutes);
app.use('/hangoutparties', hangoutPartyRoutes);
app.use('/specialevents', specialEventRoutes);
app.use('/longdistances', longDistanceRoutes);
app.use('/summary', summaryRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Love Tracker API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
