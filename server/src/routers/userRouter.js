import express from "express";
import { getUser, userLogin, userSignin } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.route("/").get(getUser)
userRouter.route("/signin").get(userSignin)
userRouter.route("/login").get(userLogin)


export default userRouter