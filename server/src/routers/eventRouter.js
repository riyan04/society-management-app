import express from "express"
import { getEvent } from '../controllers/eventController.js'

const eventRouter = express.Router()


eventRouter.route("/").get(getEvent)


export default eventRouter