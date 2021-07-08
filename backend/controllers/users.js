const User = require("../models/user");


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


module.exports = {
    register,
    login
}