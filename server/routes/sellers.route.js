var express = require('express');
var router = express.Router();
var sellers_controller = require("../controllers/sellers.controller");

/* GET users api */
router.route('/')
  .get(sellers_controller.findAll)
  // .post(sellers_controller.findBy)
  .post(sellers_controller.insert)
  .delete(sellers_controller.delete);

router.route('/:id')
  .get(sellers_controller.findById)
  .put(sellers_controller.update);

module.exports = router;