const User = require('../database/schemas/userSchema');

const createUser = async (payload) => {
    try {
        const user = await User.create(payload);
        return user;
    } 
    catch (error) {
        return error;
    }
}


const getUser = async (email) => {
    try {
        const user = await User.findOne({email});
        return user;
    } 
    catch (error) {
        console.log(error);
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = {createUser, getUser};