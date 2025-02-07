import {User} from '../models/user.model.js'


const getUser = async(req, res) => {
    const user = req.user
    try {
        if(!user){
            throw new Error("Not able to get the user from the req, getUser")
        }
        res
        .status(200)
        .json(user);
    } catch (error) {
        res
        .render(error.message)
    }
}

const userSignin = async(req, res) => {
    const {firstName, lastName, email, phone, password} = req.body


    try {
        if(!firstName || !lastName || !email || !password){
            throw new Error("Please fill all the credentials")
        }
    
        const existingUser = await User.findOne({email: email})
        if(existingUser){
            throw new Error("The user already exists, please login")
        }
    
        const user = await User.create({
            firstName,
            lastName,
            email,
            phone,
            password
        })
    
        const createdUser = await User.findById(user._id).select("-password")
    
        if(!createdUser){
            throw new Error("Something went wrong in signing up the user")
        }
    
        res
        .status(200)
        .json(createdUser)
    } catch (error) {
        console.log("reached")
        res.send(error.message)
    }
}

const userLogin = async(req, res) => {
    const {email, phone, password} = req.body

    if(!email && !phone){
        throw new Error("Email or phone no. required")
    }
    const user = await User.findOne({
        $or: [{email}, {phone}]
    })
    if(!user){
        throw new Error(`User with email: ${email} or phone: ${phone} doesn't exists. Please sign up`)
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        throw new Error("Invalid Password")
    }

    const accessToken = await user.generateAccessToken()
    const refreshToken = await user.generateRefreshToken()
    if(!accessToken || !refreshToken){
        throw new Error("Not able to generate access or refresh token")
    }
    const loggedInUser = await User.findById(user._id).select("-password")

    const options = {
        httpOnly: true,
        secure: true
    }
    res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .json({
        accessToken: accessToken,
        user: loggedInUser
    })
    
}

const logoutUser = async(req, res) => {
    const user = req.user

    if(!user){
        throw new Error("Not able to get the user from the req, logoutUser")
    }
    const options = {
        httpOnly: true,
        secure: true
    }
    res
    .clearCookie("refreshToken", options)
    .status(200)
    .json(
        {
            message: `${user.firstName} ${user.lastName} loggedOut`
        }
    )
}

export {getUser, userSignin, userLogin, logoutUser}