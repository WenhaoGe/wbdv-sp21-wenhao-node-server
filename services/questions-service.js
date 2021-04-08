
let questions = require('./questions.json')

const createQuestion = () => {}

const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questions
}

const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

const findQuestionById = (quid) => {
    return questions.find((question) => {
        return question._id === quid
    })
}

const updateQuestion = () => {}

const deleteQuestion = () => {}

module.exports = {
    createQuestion, createQuestionForQuiz, findAllQuestions,
    findQuestionsForQuiz, findQuestionById, updateQuestion, deleteQuestion
}

// /services/questions-service.js