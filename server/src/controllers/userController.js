const getUser = async(req, res) => {
    res.send("Hello user Riyan")
}

const userSignin = async(req, res) => {
    res.send("Hello user Signin page")
}

const userLogin = async(req, res) => {
    res.send("Hello user Login page")
}

export {getUser, userSignin, userLogin}