var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('').get(function (req, res) {
  res.setHeader('Content-type', 'text/html');
  res.status(200).send('Welcome on BinkL project API');
});

module.exports = router;
