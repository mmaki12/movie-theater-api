const app = require("../src/app");
const PORT = require("../server")
const User = require("./User")
const express = require("express");
const router = express.Router()


router.get('/', async (req, res) => {
    try {
      const shows = await shows.find();
      res.json(shows);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/:showId', async (req, res) => {
    try {
      const show = await Show.findByPk(req.params.showId);
      res.json(show);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/genres/:genre', async (req, res) => {
    try {
      const shows = await Show.find({genre: req.params.genre});
      res.json(shows);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/:showId/rating', async (req, res) => {
    try {
      const show = await Show.findByPk(req.params.showId);
      res.json(show);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.put('/:showId/status', async (req, res) => {
    try {
      const show = await Show.findByPk(req.params.showId);
      res.json(show);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
 
  router.delete('/:showId', async (req, res) => {
    try {
      const show = await Show.findByIdAndDelete(req.params.showId);
      res.json(show);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


router.put('/:id/update-rating', async (request, response) => {
    const showId = request.params.id;
    const newRating = request.body.rating;

    const show = await Show.findByPk(showId);

    await Show.update(
        { rating: newRating },
        { where: { id: showId } }
    )
    response.json({ message: 'Success!' });
});

module.exports = router;