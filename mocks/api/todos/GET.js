const data = require("../../storage/data");

module.exports = function (request, response) {
  const todos = data.getTodos;
  const id = parseInt(request.query.id);
  if (!id) response.status(200).send(todos || []);
  if (todos.find((link) => link.id == id)) {
    return response.status(200).send(todos.find((link) => link.id == id));
  } else {
    return response
      .status(404)
      .send({ status: 404, message: `Couldn't not find id = ${id}` });
  }
};
