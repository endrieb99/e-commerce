const jwt = require('jsonwebtoken');
const User = require("../models/user");

const auth = async (req, res, next) => {

    try {

        const token = req.header('auth-token');

        if (!token)
            return res.status(401).send({ error: "Access Denied" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await  User.findById(verified._id)
        next();
    } catch (error) {
        res.status(400).send({ error: "invalid token" });
    }
}

const admin = (req, res, next) => {
    try {

        if (req.user && req.user.role === 2)
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