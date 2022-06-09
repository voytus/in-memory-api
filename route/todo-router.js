const express = require(`express`);
//any path defined in a router get mounted in the TODO
const router = express.Router();


router.get(`/getAll`, (request, response, next) => {
    response.contentType('application/json')
    .status(200)
    .json(database);
});

router.post('/create')
router.post('/update')
router.post('/delete')

module.exports = router;


let idCounter = 3;
const database = {
    id: 1,
    date: new Date("2022-06-09"),
    task: "Do_it",
    taskDone: true,
}


