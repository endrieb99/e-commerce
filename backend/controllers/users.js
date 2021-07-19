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
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            role: 1
        });

        // Save User
        const savedUser = await user.save();
        res.send({ user: user._id });

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
        res.header('auth-token', token).send({ jwt: token });

    } catch (error) {
        res.status(400).send({ error: error });
    }
}

const deleteUser = async (req, res) => {

    try {
        console.log(req.params)
        const user = await Users.findById(req.params.id)
        if (user) {
            await user.remove()
            res.json({ message: 'User removed' })
        } else {
            res.status(404)
            throw new Error('User not found')
        }
    } catch (error) {
        res.status(400).send(error)
    }

}


module.exports = {
    register,
    login,
    deleteUser
}