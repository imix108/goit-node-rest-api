import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().required().min(2).messages({
    "string.base": `"name", should be a type of 'text'`,
    "string.empty": `"name" cannot be an empty field`,
    "string.min": `"name" should have a minimum length of {#limit}`,
    "any.required": `"name" is a required field`,
  }),
  email: Joi.string().email().required(),
  phone: Joi.string().required().min(3).messages({
    "string.base": `"phone", should be a type of 'text'`,
    "string.empty": `"phone" cannot be an empty field`,
    "string.min": `"phone" should have a minimum length of {#limit}`,
    "any.required": `"phone" is a required field`,
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email(),
  phone: Joi.string().min(3),
})
  .min(1)
  .message("Body must have at least one field!");