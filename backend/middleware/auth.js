const jwt = require('jsonwebtoken');
const User = require("../models/user");

const auth = async (req, res, next) => {


    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {

            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')

        }
    }
    if (!token) {
        res.status(401).send({ error: "Not authorized, no token" })
        //throw new Error('Not authorized, no token')
    }
}

const admin = (req, res, next) => {
    try {

        if (req.user && req.user.role == 2)
            next();
        else
            return res.status(401).send({ error: "Not Authorized as an admin" });

    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {
    auth,
    admin
}