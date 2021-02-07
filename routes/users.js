const mongoose = require('mongoose');
const User = require("../models/user");
const { Router } = require('express');

const router = Router();


router.get('/', async (req, res) => {
    const user = await User.find()

    res.json(user)
})

router.post('/', async (req, res) => {

    const user = new User(req.body)
    await user.save()
    res.json(user)

})

// router.delete('/', async (req, res) => {
//     const users = await User.deleteMany({})
//     res.json(users);
// })

module.exports = router;
