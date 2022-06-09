const express = require(`express`);
const morgan = require(`morgan`);
const ToDoRouter = require(`./route/todo-router`);
const PORT =  process.env.PORT || 3000;
const app = express();


app.get(`/getAll`, (request, response) => {
response.send(database);
});

app.post(`/create`);
app.put(`/update`);
app.delete(`/delete`);


app.listen(PORT, () => console.log(`Looks like running`));