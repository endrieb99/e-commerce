const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {

    try {

        const token = req.header('auth-token');

        if (!token)
            return res.status(401).send({ error: "Access Denied" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send({ error: "invalid token" });
    }
}

module.exports = {
    Auth
}