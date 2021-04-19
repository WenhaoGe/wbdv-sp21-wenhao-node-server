const questionsModel = require("../models/questions/questions-model")

const quizzesModel = require("../models/quizzes/quizzes-model")

const findAllQuestions = () => questionsModel.find()

const findQuestionById = (qid) => {
    return questionsModel.findById(qid)
}

const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
    .populate("questions").then(quiz => quiz.questions)

// const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
//     .populate('questions').then(quiz => {
//         console.log(quiz)
//         return quiz.questions
//     })

// const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
//     .populate('questions').then(quiz => {
//         return quiz.questions
//     })

module.exports = {
    findAllQuestions, findQuestionById, findQuestionsForQuiz
}


