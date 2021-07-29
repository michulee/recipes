const express = require('express');
const router = express.Router();
const {Recipes} = require('../models');

router.get('/', (req, res) => {
    // res.send('Hello');
    res.json('Hello');
});

// in sequelize must make  everying async
router.post('/', async (req, res) => {
    const post = req.body;
    await Recipes.create(post);
    res.json(post);
});

module.exports = router;
