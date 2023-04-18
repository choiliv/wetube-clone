import express from "express";
import {see, edit, remove} from "../controller/storiesController";


const storiesRouter = express.Router();

storiesRouter.get("/:id(\\d+)", see)
storiesRouter.get("/:id(\\d+)/edit", edit);
storiesRouter.get("/:id(\\d+)/delete", remove);


export default storiesRouter;
