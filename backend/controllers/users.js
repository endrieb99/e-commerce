const Users = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    try {

        //Check if email exist
        const emailExist = await Users.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).send({ error: 'Email exist' });

        //Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Create User
        const user = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            role: 0
        });

        if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: false,
                token: token
            })
        }

    } catch (error) {
        res.status(400).send({ error: error });
    }
}


const login = async (req, res) => {
    try {

        //Check if email exist
        const user = await Users.findOne({ email: req.body.email });
        if (!user) return res.status(400).send({ error: 'Wrong Email or Passowrd' });

        // Check Password if it's valid
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send({ error: 'Wrong Email or Passowrd' });

        //Create token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        //res.header('auth-token', token).send({ jwt: token });
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.role,
            token: token
        })

    } catch (error) {
        res.status(400).send({ error: error });
    }
}

const getUserProfile = async (req, res) => {

    const user = await Users.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.role,
        })
    } else {
        res.status(404).send({ error: "User not found" })
    }
}

const deleteUser = async (req, res) => {

    try {
        const user = await Users.findById(req.params.id)
        if (user) {
            await user.remove()
            res.json({ message: 'User removed' })
        } else {
            res.status(404).send({ error: "User not found" })
        }
    } catch (error) {
        res.status(400).send({ error })
    }

}


module.exports = {
    register,
    login,
    deleteUser
}