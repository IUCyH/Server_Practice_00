import "reflect-metadata";
import express from "express";
import userRouter from "./features/user/router";

const app = express();

app.use("/users", userRouter);

const port = 8080;
const host = "127.0.0.1";
app.listen(port, host, () => {
    console.log(`Server listening at http://${host}:${port}`);
});