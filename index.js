const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();
require('./services/cache');

const app = express()

const articles = require('./routes/articles');
const users = require('./routes/users');

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

app.use('/api/article', articles);
app.use('/api/user', users);


app.listen(3000, () => {
    console.log("Listening on Port 3000")
})
