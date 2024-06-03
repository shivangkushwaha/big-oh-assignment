const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./app/models');
const loadRoutes = require('./app/routes');
const responseHandler = require('./app/middleware/responseHandler');

const app = express();
app.use(bodyParser.json());
app.use(responseHandler);

// Dynamically load routes
loadRoutes(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
