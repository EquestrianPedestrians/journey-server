const controllers = require('./controllers.js');

module.exports = function(app, express) {
  app.get('/hikes', controllers.hike);
  app.post('/add_hike', controllers.addHike);
};