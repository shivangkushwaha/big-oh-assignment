const fs = require('fs');
const path = require('path');

const loadRoutes = (app) => {
  const routesPath = path.join(__dirname);
  
  fs.readdirSync(routesPath)
    .filter(file => {
      return file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(-3) === '.js';
    })
    .forEach(file => {
      const route = require(path.join(routesPath, file));
      const routePath = `/${file.replace('Routes.js', '')}`;
      app.use(routePath, route);
    });
};

module.exports = loadRoutes;
