import "reflect-metadata";
import express from "express";
import userRouter from "./features/user/router";
import { AppDataSource } from "./configs/orm";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

const port = 8080;
const host = "0.0.0.0";
app.listen(port, host, async () => {
    console.log(`Server listening at http://${host}:${port}`);

    try {
        await AppDataSource.initialize();
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
});