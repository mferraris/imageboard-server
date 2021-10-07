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

router.get("/:imageId", async (request, response, next) => {
  try {
    const imageId = request.params.imageId;
    const image = await Image.findByPk(imageId);

    if (!image) {
      response.status(404).send("Image not found");
    } else {
      response.send(image);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/addImage", async (request, response, next) => {
  try {
    const newImage = await Image.create(request.body);
    response.json(newImage);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
