import express from "express";
import { getUser, logoutUser, userLogin, userSignin } from "../controllers/userController.js";
import verifyUser from "../middlewares/authMiddleware.js";

const userRouter = express.Router()

userRouter.route("/signin").post(userSignin)
userRouter.route("/login").post(userLogin)

userRouter.route("/").get(verifyUser, getUser)
userRouter.route("/logout").post(verifyUser, logoutUser)


export default userRouter