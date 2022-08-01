const bcrypt = require('bcrypt');
const {getUser, createUser} = require('../services/UserService');
const createToken = require('../utils/Token');

const register = async (req, res) => {
    try {
        const {email, name, password, phone} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);

        const user = await createUser({email, name, password: hashPass, phone});
        return res.json(user).status(201);
    } 
    catch(error) {
        console.log(error);
    }
}

const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await getUser(email);

        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }

        const condition = await bcrypt.compare(password, user.password);

        if(!condition) {
            return res.status(401).json({message: 'Incorrect Pass'});
        }

        const token = await createToken(user._id);

        return res.status(200).json({token});

    } 
    catch (error) {
        console.log(error);    
    }
}

module.exports = {register, login};