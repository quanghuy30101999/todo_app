const data = require("../../storage/data");

module.exports = function (request, response) {
  const link = request.body;
  newTodo = {
    id: Math.max(...data.getTodos.map((link) => link.id)) + 1,
    content: link.content,
    completed: link.completed,
  };
  data.getTodos.push(newTodo);
  response.status(201).send(newTodo);
};
