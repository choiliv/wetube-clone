import express from "express";
import {profile, editProfile} from "../controller/userController";


const userRouter = express.Router();



userRouter.get("/:id", profile);
userRouter.get("/:id/edit-profile", editProfile);




export default userRouter;
