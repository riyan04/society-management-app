import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String
        },
        password: {
            type: String
        },
        societies: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Society"
            }
        ]
    }
)


export const User = mongoose.model("User", userSchema)