import jwt from 'jsonwebtoken';
import Res from '../../helpers/responses';
import {
   HTTP_SERVER_ERROR,
   HTTP_CREATED,
   HTTP_OK,
   HTTP_BAD_REQUEST,
} from '../../core/constants/httpStatus';
import { hashPassword } from '../../utils/password';
import DriverModal from '../../models/driver';
import bcrypt from 'bcrypt-nodejs';
import { isDriverValid } from '../../utils/validator/users';
/**
 * Driver Controller
 */
class DriverController {
   /**
    * Create a user
    * @param {*} req
    * @param {*} res
    * @returns {string|object} user payload
    */
   static async create(req, res) {
      const data = req.body;
      if (!isDriverValid(data)) {
         return Res.handleError(HTTP_BAD_REQUEST, err, res);
      }
      const { password } = data;
      let hashPass = hashPassword(password);
      let driver = new DriverModal({
         firstname,
         lastname,
         nationality,
         image,
         phone_number,
         driving_licence,
         licence_number,
         email,
         password: hashPass,
         date,
      });
      driver
         .save()
         .then((result) => {
            return Res.handleOk(HTTP_CREATED, result, res);
         })
         .catch((err) => {
            return Res.handleError(HTTP_SERVER_ERROR, err, res);
         });
   }
   /**
    * driver login
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async login(req, res) {
      const { email, password } = req.body;
      DriverModal.find({ email })
         .exec()
         .then((user) => {
            if (user.length < 1) {
               return Res.handleError(HTTP_SERVER_ERROR, 'error', res);
            } else {
               bcrypt.compare(password, user[0].password, (err, result) => {
                  if (err) {
                     return Res.handleError(HTTP_SERVER_ERROR, err, res);
                  }
                  if (result) {
                     const SECRET_KEY = 'YOUR_SECURE_PASSWORD';
                     const token = jwt.sign(
                        {
                           firstname: user[0].firstname,
                           lastname: user[0].lastname,
                           userId: user[0]._id,
                           nationality: user[0].nationality,
                           image: user[0].image,
                           phone_number: user[0].phone_number,
                           driving_licence: user[0].driving_licence,
                           licence_number: user[0].licence_number,
                           email: user[0].email,
                           password: user[0].password,
                           date: user[0].date,
                        },
                        SECRET_KEY,
                        {
                           expiresIn: '24h',
                        },
                     );
                     return Res.handleSuccess(
                        HTTP_OK,
                        token,
                        { verified: user[0].verified },
                        res,
                     );
                  }
                  return Res.handleError(HTTP_SERVER_ERROR, 'error', res);
               });
            }
         })
         .catch((err) => Res.handleError(HTTP_SERVER_ERROR, 'error', res));
   }
}

export default DriverController;
