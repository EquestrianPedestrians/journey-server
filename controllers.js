module.exports = {
  addHike: function(req, res) {
    res.status(201).send('POST is working')
  },
  hike: function(req, res) {
    res.status(200).send('This is working');
  }
};