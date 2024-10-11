import express from 'express'
import {userRouter, societyRouter, notificationRouter, eventRouter, complaintRouter} from './routers/index.js'


const app = express()
app.use(express.json())



app.use("/api/v1/user", userRouter)
app.use("/api/v1/society", societyRouter)
app.use("/api/v1/notification", notificationRouter)
app.use("/api/v1/event", eventRouter)
app.use("/api/v1/complaint", complaintRouter)


export default app
