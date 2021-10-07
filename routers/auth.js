const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router();

router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      response.status(400).send("Please supply a valid email and password");
    } else {
      response.send({
        jwt: toJWT({ userId: 1 }),
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
