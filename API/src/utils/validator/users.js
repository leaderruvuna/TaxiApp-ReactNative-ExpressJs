import Joi from 'joi';
import { join } from 'path';

export const isDriverValid = (input) => {
   const schema = Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      image: Joi.string().required(),
      nationality: Joi.string().required(),
      country_code: Joi.string().required(),
      phone_number: Joi.string().required(),
      licence_number: Joi.string().required(),
      driving_licence: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      date: Joi.string().required(),
      location: Joi.array().required(),
   });
   let result = schema.validate(input);
   return result;
};

export const isRiderValid = (input) => {
   const schema = Joi.object({
      firstname: Joi.string(),
      lastname: Joi.string(),
      nationality: Joi.string(),
      country_code: Joi.string(),
      phone_number: Joi.string().required(),
      image: Joi.string(),
      email: Joi.string(),
      date: Joi.string().required(),
   });
   const result = schema.validate(input);
   return result;
};
export const isRiderProfileValid = (input) => {
   const schema = Joi.object({
      user_id: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      nationality: Joi.string(),
      country_code: Joi.string(),
      phone_number: Joi.string(),
      image: Joi.string(),
      email: Joi.string().required(),
      date: Joi.string().required(),
   });
   const result = schema.validate(input);
   return result;
};
