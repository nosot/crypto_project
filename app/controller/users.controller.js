const { db } = require('../db')

const SignUp = async (req, res) => {
    const userData = req.body;
    res.status(201).send({ message: 'User signed up successfully', user: userData });
}

const SignIn = async (req, res) => {
    const userData = req.body;
    res.status(200).send({ message: 'User signed in successfully', user: userData });
}

const CheckAuth = async (req, res) => {

}

module.exports = {
    SignUp,
    SignIn,
    CheckAuth
}