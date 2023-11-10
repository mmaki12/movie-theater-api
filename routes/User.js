const { Show, User } = require("../models/index")
const express = require("express");
const router = express.Router()




router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/:userId/shows', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
});

router.put('/:userId/shows/:showId', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;