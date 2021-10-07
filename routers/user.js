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

router.post("/addUser", async (request, response, next) => {
  try {
    const { email, password, fullName } = request.body;
    if (!email || !password || !fullName) {
      response.status(400).send("Missing parameters");
    } else {
      const newUser = await User.create({
        email,
        password,
        fullName,
      });
      response.json(newUser);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
