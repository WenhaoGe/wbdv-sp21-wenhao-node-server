const mongoose = require('mongoose')

const questionSchema = require("../questions/questions-schema")
const quizAttempts = mongoose.Schema({
    // _id: String,
    score: Number,
    quiz: {
        _id: String,
        title: String,
        questions: [{
            _id: String,
            title: String,
            quizId: String,
            question: String,
            correct: String,
            answer: String,
            type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'FILL_BLANKS']},
            choice: [String]
        }]
    },
    answer: [
        {
            _id: String,
            title: String,
            question: String,
            correct: String,
            answer: String,
            type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'FILL_BLANKS']},
            choice: [String]
        }
    ]
    // answer: [questionSchema],
     }, {collection: 'quizAttempts'})
    // quiz: {type: String, ref: 'QuizzesModel'},


module.exports = quizAttempts

