import express from "express"
import { getComplaint } from "../controllers/complaintController.js"

const complaintRouter = express.Router()

complaintRouter.route("/").get(getComplaint)

export default complaintRouter