const {getUser, createUser} = require('../services/UserService');


const register = async (req, res) => {
    try {
        const user = await createUser(req.body);
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

        if(user.password !== password) {
            return res.status(401).json({message: 'Incorrect Pass'});
        }

        return res.status(200).json({message: 'Login'});

    } 
    catch (error) {
        console.log(error);    
    }
}

module.exports = {register, login};