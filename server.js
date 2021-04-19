require('dotenv').config()

// const mongoUsername = process.env.MONGOLAB_USERNAME
// const mongoPassword = process.env.MONGOLAB_PASSWORD

const express = require('express')

const app = express()

const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// mongoose.connect(`mongodb://${mongoUsername}:${mongoPassword}@iad2-c4-1.mongo.objectrocket.com:53615,iad2-c4-2.mongo.objectrocket.com:53615,iad2-c4-0.mongo.objectrocket.com:53615/quizzes?replicaSet=0c4ddc769915406a9652a7f8ca03e203`)
// mongoose.connect('mongodb://localhost:27017/whiteboard',
//                  {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect(`mongodb+srv://gwh:uWr5jmzM8VpUsnI4@cluster0.uvcmj.mongodb.net/whiteboard`)


const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(3000)
