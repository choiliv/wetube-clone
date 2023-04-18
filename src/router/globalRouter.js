import express from "express";
import { join, login } from "../controller/userController";
import {  home, trending, newStory } from "../controller/storiesController";


const globalRouter = express.Router();

globalRouter.get("/",home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newStory);
globalRouter.get("/join", join);
globalRouter.get("/login", login);


export default globalRouter;
