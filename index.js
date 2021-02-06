const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(json)

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('everything in place');
})
    .catch(() => {
        console.log('connection failed');
    });

app.get('/', (req, res) => {
    res.send('HI ther')
})

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})
