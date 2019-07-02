var express = require('express');
var router = express.Router();
var user_controller = require("../controllers/users.controller");

/* GET users api */
router.route('/')
  .get(user_controller.findAll)
  // .post(user_controller.findBy)
  .post(user_controller.insert);
  // .put(user_controller.update);
  // .delete(user_controller.delete);

router.route('/:id')
  .get(user_controller.findById)
  .put(user_controller.update);

module.exports = router;