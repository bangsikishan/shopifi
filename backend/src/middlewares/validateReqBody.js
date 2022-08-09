const joi = require('joi');

const validateRequestBody = (schema) => {
    return async (req, res, next) => {
        const value = await schema.validateAsync(req.body);
        if (value.error) {
            return res.status(422).json({ error: value.error.details[0].message });
        }
        next();
    };
};

module.exports = validateRequestBody;