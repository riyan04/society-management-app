import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'


const verifyUser = async (req, res, next) => {
    
    try {
        const refreshToken = req.cookies?.refreshToken
        if(!refreshToken){
            throw new Error("The user has logged out")
        }
        const accessToken = req.headers.authorization || req.cookies.accessToken
        if(!accessToken){
            console.log("reached")
            throw new Error ("Unauthorized request. Access Token not present!")
        }
    
        const decodedAccessToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        if(!decodedAccessToken){
            throw new Error("Access Token expired");
        }
    
        const user = await User.findById(decodedAccessToken._id).select("-password")
        if(!user){
            throw new Error("Backend failed to find the user after validating the access token");
        }
        req.user = user;
        next()
    } catch (error) {
        res.send(error.message)
    }
}


export default verifyUser