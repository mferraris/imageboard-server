const { Router, response } = require("express");
const router = new Router();

const User = require("../models").user;

router.get("/", async (request, response, next) => {
  try {
    const users = await User.findAll();
    response.send(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
