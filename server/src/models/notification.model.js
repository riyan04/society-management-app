import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        notificationHeading: {
            type: String,
            required: true
        },
        notificationBody: {
            type: String
        },
        notificationBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        notificationOf: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Society"
        }
    },
    {
        timestamps: true
    }
)

export const Notification = mongoose.model("Notification", notificationSchema)