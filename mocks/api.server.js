const express = require("express");
const apiMocker = require("connect-api-mocker");
const cors = require("cors");

const config = {
  name: "Fake patient.api",
  port: process.env.WEBAPP_MOCK_PORT || 5102,
  basePath: process.env.WEBAPP_MOCK_BASE_PATH || "/api/v1",
};

const app = express();
app.use(cors());
app.use(express.text());

/* add random delay between 100ms and 500ms */
app.use(function (req, res, next) {
  setTimeout(next, Math.floor(Math.random() * (500 - 100 + 1)) + 100);
});

/* mock data generic as connect-api-mocker*/
app.use(config.basePath, apiMocker("./mocks/api"));

app.listen(config.port);
console.log(`${config.name} running on http://localhost:${config.port}`);
