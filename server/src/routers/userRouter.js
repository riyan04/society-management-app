import express from "express";
import { getUser, userLogin, userSignin } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.route("/").get(getUser)
userRouter.route("/signin").post(userSignin)
userRouter.route("/login").post(userLogin)


export default userRouter