const { Router, response } = require("express");
const router = new Router();

const Image = require("../models").image;

router.get("/", async (request, response, next) => {
  try {
    const image = await Image.findAll();
    response.send(image);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
