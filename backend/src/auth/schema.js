const Joi = require('joi');

const userSchema = {
    registerUser: Joi.object({
        name: Joi.string().min(3).max(40).required(),
        email: Joi.string().email().min(10).max(50).required(),
        phone: Joi.string().min(10).required(),
        password: Joi.string().alphanum().min(8).max(50).required(),
    }),
    loginUser: Joi.object({
        email: Joi.string().email().min(10).max(50).required(),
        password: Joi.string().alphanum().min(8).max(50).required(),
    }),
};

module.exports = userSchema;
