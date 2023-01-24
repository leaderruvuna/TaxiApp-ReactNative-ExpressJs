import Joi from 'joi';

export const isRideValid = (input) => {
   const schema = Joi.object({
      rider_id: Joi.string().required(),
      rider_names: Joi.string().required(),
      rider_phone_number: Joi.string().required(),
      curr_location: Joi.string().required(),
      curr_lat: Joi.number().required(),
      curr_long: Joi.number().required(),
      dest_location: Joi.string().required(),
      dest_lat: Joi.number().required(),
      dest_long: Joi.number().required(),
      distance: Joi.number().required(),
      distance_unit: Joi.string().required(),
      price: Joi.number().required(),
      currency: Joi.string().required(),
      status: Joi.number().required(),
      // driver_id: Joi.string(),
      // driver_names: Joi.string(),
      // driver_phone_number: Joi.string(),
      // driver_lat: Joi.number(),
      // driver_long: Joi.number(),
      date: Joi.string().required(),
   });
   const result = schema.validate(input);
   return result;
};
