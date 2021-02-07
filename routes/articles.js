const mongoose = require('mongoose');
const User = require("../models/user");
const Article = require("../models/article");
const { Router } = require('express');

const router = Router();


router.get('/', async (req, res) => {
    const article = await Article.find()

    res.json(article)
})

router.post('/', async (req, res) => {

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
