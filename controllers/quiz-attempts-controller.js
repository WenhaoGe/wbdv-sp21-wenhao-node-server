
module.exports = (app) => {

    const quizAttemptDao = require('../daos/quiz-attempts-dao')

    const createAttempt = (req, res) => {

        quizAttemptDao.createAttempt(req.params.qid, req.body)
            .then(attempt => res.send(attempt))
    }

    const findAttemptsForQuiz = (req, res) => {
        quizAttemptDao.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts))
    }

    app.post('/api/quizzes/:qid/attempts', createAttempt)
    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz)


    // app.post('/api/quizzes/:qid/attempts', (req, res) =>
    //     quizAttemptDao.createAttempt( req.params.qid, req.body)
    //         .then(attempt => res.send(attempt)))

    // app.get('/api/quizzes/:qid/attempts', (req, res) =>
    //     quizAttemptDao.findAttemptsForQuiz(req.params.qid)
    //         .then(attempts => res.send(attempts)))
}

