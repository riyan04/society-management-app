import express from "express";
import { getNotification } from "../controllers/notificationController.js";

const notificationRouter = express.Router()

notificationRouter.route("/").get(getNotification)

export default notificationRouter