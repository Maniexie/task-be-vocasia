const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
