import jwt from 'jsonwebtoken';
export const createToken = (user,SECRET_KEY) => {
   return jwt.sign(
      {
         user_id:user[0]?._id,
         firstname: user[0]?.firstname,
         lastname: user[0]?.lastname,
         nationality: user[0]?.nationality,
         image: user[0]?.image,
         phone_number: user[0]?.phone_number,
         email: user[0]?.email,
         date: user[0]?.date,
      },
      SECRET_KEY,
      {
         expiresIn: '24h',
      },
   );
};
