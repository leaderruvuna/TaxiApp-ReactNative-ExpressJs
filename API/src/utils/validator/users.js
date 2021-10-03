import Joi from 'joi';

export const isDriverValid = (input) => {
   schema = {
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      image: Joi.string().required(),
      nationality: Joi.string().required(),
      country_code: Joi.string().required(),
      phone_number: Joi.string().required(),
      driving_licence: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      date: Joi.date().required(),
   };
   let result = Joi.valid(input, schema);
   return result;
};

export const isRiderValid = (input) => {
   schema = {
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      country_code: Joi.string().required(),
      phone_number: Joi.string().required(),
      image: Joi.string().required(),
      email: Joi.string().required(),
      date: Joi.date().required(),
   };
   const result = Joi.valid(input, schema);
   return result;
};
