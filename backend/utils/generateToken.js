import jwt from 'jsonwebtoken'

const generateTokenAndCookie = (userId, res) =>{
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: '10d',
    })

    res.cookie("jwt",token,{
        maxAge: 10 * 24 * 60 * 60 * 1000, //milliseconds
        httpOnly: true, //prevent XSS attack cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    })
}

export default generateTokenAndCookie