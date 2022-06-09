const express = require(`express`);
//any path defined in a router get mounted in the TODO
const router = express.Router();


router.get(`/getAll`, (request, response, next) => {
    response.contentType('application/json')
    .status(200)
    .json(database);
});

router.post('/create', request, response, next) => {
if (Object.keys(request.body).length == 0) return next({statusCode: 400, message: "No empty body"})

response.status(201).json(newTodoData);
});


router.post('/update', request, response, next) => {
    if (Object.keys(request.body).length == 0) return next({statusCode: 400, message: "No empty body"})

}


router.post('/delete')

module.exports = router;

let idCounter = 3;

const database = {
    id: 1,
    date: new Date("2022-06-09"),
    task: "Do_it",
    taskDone: true,

}


