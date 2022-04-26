const Joi = require('@hapi/joi');

export const userAuthSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(4).required()
});