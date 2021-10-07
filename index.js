const express = require("express");
const app = express();
const jsonParser = express.json();

app.use(jsonParser); // ???

const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const authRouter = require("./routers/auth");

app.use("/user", userRouter);
app.use("/image", imageRouter);
app.use("/auth", authRouter);

const port = process.env.PORT || 4000; // ???

app.listen(port, () => console.log(`Listening on port ${port}`));
