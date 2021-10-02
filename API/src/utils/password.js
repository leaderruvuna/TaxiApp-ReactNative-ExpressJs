import bcrypt from 'bcrypt-nodejs';

export const hashPassword = (password) =>
   bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const comparePassword = (password, hashedPassword) =>
   bcrypt.compare(password, hashedPassword);
