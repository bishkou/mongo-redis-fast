const mongoose = require('mongoose');
const User = require("../models/user");
const Article = require("../models/article");
const { Router } = require('express');
const clearCache = require('../middlewares/cleanCache');

const router = Router();
const currentUser = '60206bfb609ed18458a7acd8'



router.get('/', async (req, res) => {
    const article = await Article.find().cache({
        key: currentUser
    })

    res.json(article)
})

router.post('/', clearCache, async (req, res) => {

    const { userId, title, content } = req.body

    const user = await User.findById(userId)


    const article = new Article({
        title,
        content,
        user
    })

    await article.save();

    res.json(article);

})

module.exports = router;
