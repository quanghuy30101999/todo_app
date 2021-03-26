module.exports = function (request, response) {
  response.status(404).send({ message: "404 Not Found" });
};
