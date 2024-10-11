import mongoose from "mongoose";

const societySchema = new mongoose.Schema(
    {
        societyName: {
            type: String,
            required: true
        },
        societyAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        societyMembers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        societyNotifications: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Notification"
            }
        ],
        societyEvents: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Event"
            }
        ],
        societyComplaints: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Complaint"
            }
        ],
    }
)


export const Society = mongoose.model("Society", societySchema)