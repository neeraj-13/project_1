const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const serviceBasePath = `/rest/api`;

module.exports = function (app) {
  let swaggerDefinition = {
    swagger: "2.0",
    info: {
      title: "SPARSH Admin service  API's",
      description: "RESTful API for SPARSH Faculty services",
      version: "1.0",
    },
    servers: [
      {
        url: `http://${process.env.REMOTE_HOST}:${process.env.PORT}`,
      },
    ],
    produces: ["application/json"],
    host: process.env.HOST_NAME,
    basePath: serviceBasePath,
  };
  let options = {
    swaggerDefinition: swaggerDefinition,
    explorer: true,
    apis: [
      path.join(__dirname, "../controllers/*.js"),
      path.join(__dirname, "../routers/*.js"),
    ],
  };
  let extraOptions = {
    explorer: true,
    swaggerOptions: {
      validatorUrl: null,
    },
    customSiteTitle: "Swagger - SPARSH ADMIN",
  };
  swaggerSpec = swaggerJSDoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, extraOptions)
  );
};
