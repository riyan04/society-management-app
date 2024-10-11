import express from "express";
import { getSociety } from "../controllers/societyController.js";

const societyRouter = express.Router()

societyRouter.route("/").get(getSociety)


export default societyRouter