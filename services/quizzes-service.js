

const quizzesDao = require("../daos/quizzes-dao")

const findAllQuizzes = () => quizzesDao.findAllQuizzes()

const findQuizById = (qid) => quizzesDao.findQuizById(qid)

module.exports = {findAllQuizzes, findQuizById}

// let quizzes = require('./quizzes.json')
//
// const createQuiz = () => {}
//
// const findAllQuizzes = () => quizzes
//
// const findQuizById = (qid) => {
//     return quizzes.find((quiz) => {
//         return (quiz._id === qid)
//     })
// }
//
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
//
//
// module.exports = {
//     findAllQuizzes,
//     findQuizById
// }

