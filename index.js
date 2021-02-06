const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()

app.use(express.json())
app.use(cors())

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
    res.json({
        message: 'YEEEEEEEESSSS'
    })
})

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})
