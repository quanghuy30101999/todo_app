const data = require("../../../storage/data");

module.exports = function (request, response) {
  const id = parseInt(request.params.todo_id);
  const linkFound = data.getTodos.findIndex((link) => link.id == id);

  if (linkFound != -1) {
    data.getTodos.splice(linkFound, 1);
    return response.status(204).send();
  } else {
    return response
      .status(404)
      .send({ status: 404, message: `Couldn't not find id = ${id}` });
  }
};
