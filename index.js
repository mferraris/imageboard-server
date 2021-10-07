const express = require("express");
const app = express();
const jsonParser = express.json();

app.use(jsonParser); // ???

const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");

app.use("/user", userRouter);
app.use("/image", imageRouter);

const port = process.env.PORT || 4000; // ???

app.listen(port, () => console.log(`Listening on port ${port}`));
