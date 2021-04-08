

module.exports = (app) => {

    const questionService = require("../services/questions-service")

    const findAllQuestions = (req, res) => {
        const questions = questionService.findAllQuestions()
        res.send(questions)
    }


    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        const questions = questionService.findQuestionsForQuiz(quizId)
        res.json(questions)
    }
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
    app.get("/api/questions", findAllQuestions);
}



