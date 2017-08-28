const router = require('express').Router();
const path = require('path');


//  GET homepage
router.get('/', function(req, res) {
  res.sendFile(path.resolve('web/public/index.html'))
})




module.exports = router;