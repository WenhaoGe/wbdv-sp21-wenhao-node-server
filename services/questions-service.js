

const questionsDao = require("../daos/questions-dao")


const findAllQuestions = () => questionsDao.findAllQuestions()

const findQuestionById = (qid) => questionsDao.findQuestionById(qid)

const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)

module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz}


// let questions = require('./questions.json')
//
// const createQuestion = () => {}
//
// const createQuestionForQuiz = () => {}
//
// const findAllQuestions = () => {
//     return questions
// }
//
// const findQuestionsForQuiz = (quizId) =>
//     questions.filter(question => question.quizId === quizId)
//
// const findQuestionById = (quid) => {
//     return questions.find((question) => {
//         return question._id === quid
//     })
// }
//
// const updateQuestion = () => {}
//
// const deleteQuestion = () => {}
//
// module.exports = {
//     createQuestion, createQuestionForQuiz, findAllQuestions,
//     findQuestionsForQuiz, findQuestionById, updateQuestion, deleteQuestion
// }

