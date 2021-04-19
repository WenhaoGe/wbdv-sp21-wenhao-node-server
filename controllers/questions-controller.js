



module.exports = (app) => {

    const questionsService = require("../services/questions-service")


    app.get('/api/quizzes/:qid/questions', (req, res) => {

        console.log("In findQuestionsForQuiz")
        return questionsService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => {
                console.log(questions)
                return res.json(questions)
            })
    }
    )



    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))

    app.get('/api/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))

}

