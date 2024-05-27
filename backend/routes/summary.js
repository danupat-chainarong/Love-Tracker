const express = require('express');
const router = express.Router();
const Fight = require('../models/Fight');
const Meal = require('../models/Meal');
const Place = require('../models/Place');
const MovieSeries = require('../models/MovieSeries');
const DailySong = require('../models/DailySong');
const HangoutParty = require('../models/HangoutParty');
const SpecialEvent = require('../models/SpecialEvent');
const LongDistance = require('../models/LongDistance');

router.get('/:year', async (req, res) => {
  const year = parseInt(req.params.year, 10);
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year + 1, 0, 1);

  try {
    const fights = await Fight.find({ date: { $gte: startDate, $lt: endDate } });
    const meals = await Meal.find({ date: { $gte: startDate, $lt: endDate } });
    const places = await Place.find({ date: { $gte: startDate, $lt: endDate } });
    const moviesSeries = await MovieSeries.find({ dateWatched: { $gte: startDate, $lt: endDate } });
    const dailySongs = await DailySong.find({ date: { $gte: startDate, $lt: endDate } });
    const hangoutParties = await HangoutParty.find({ date: { $gte: startDate, $lt: endDate } });
    const specialEvents = await SpecialEvent.find({ date: { $gte: startDate, $lt: endDate } });
    const longDistances = await LongDistance.find({ startDate: { $lt: endDate }, endDate: { $gte: startDate } });

    const summary = {
      year,
      totalFights: fights.length,
      totalMeals: meals.length,
      totalPlaces: places.length,
      totalMoviesSeries: moviesSeries.length,
      totalDailySongs: dailySongs.length,
      totalHangoutParties: hangoutParties.length,
      totalSpecialEvents: specialEvents.length,
      totalLongDistances: longDistances.length,
      fights,
      meals,
      places,
      moviesSeries,
      dailySongs,
      hangoutParties,
      specialEvents,
      longDistances
    };

    res.status(200).json(summary);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
