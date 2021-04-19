const mongoose = require('mongoose')

// const quizzesSchema = mongoose.Schema({
//     _id: String,
//     title: String,
//     questions: [{
//         type: String,
//         ref: 'QuestionsModel'
//     }]
// }, {collection: 'quizzes'})

const quizzesSchema = mongoose.Schema({
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
    }, {collection: 'quizzes'})

module.exports = quizzesSchema

