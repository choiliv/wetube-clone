import express, { Router } from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import storiesRouter from "./router/storiesRouter";
import userRouter from "./router/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);



app.use("/", globalRouter);
app.use("/stories", storiesRouter);
app.use("/users", userRouter);

  
const handleListening = () => console.log(`🍒 Server listeing on port http://localhost:${PORT} 🍑`);

app.listen(PORT, handleListening);
