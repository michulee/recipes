const express = require('express');
const router = express.Router();
const {Recipes} = require('../models');

router.get('/', async (req, res) => {
    // res.send('Hello');
    const listofPosts = await Recipes.findAll();
    res.json(listofPosts);
});

// all sequelize functions must make everying async
router.post('/', async (req, res) => {
    const post = req.body;
    await Recipes.create(post);
    res.json(post);
});



module.exports = router;
