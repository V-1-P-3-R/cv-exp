const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CV Experiences API',
      version: '1.0.0',
      description: 'CRUD de experiencias profesionales para hoja de vida.'
    },
    servers: [{ url: 'http://localhost:4000' }]
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;

