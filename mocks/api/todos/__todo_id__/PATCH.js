const data = require("../../../storage/data");

module.exports = function (request, response) {
  const id = parseInt(request.params.todo_id);
  const link = request.body;
  const linkFound = data.getTodos.findIndex((link) => link.id == id);

  if (linkFound != -1) {
    data.getTodos[linkFound].completed = link.completed;
    return response.status(200).send();
  } else {
    return response
      .status(404)
      .send({ status: 404, message: `Couldn't not find id = ${id}` });
  }
};
