import jwt from 'jsonwebtoken';
import Res from '../../helpers/responses';
import {
   HTTP_SERVER_ERROR,
   HTTP_CREATED,
   HTTP_OK,
   HTTP_BAD_REQUEST,
} from '../../core/constants/httpStatus';
import DriverModal from '../../models/driver';
import { isRiderValid } from '../../utils/validator/users';
/**
 * Rider Controller
 */
class RiderController {
   /**
    * Create a user
    * @param {*} req
    * @param {*} res
    * @returns {string|object} user payload
    */
   static async create(req, res) {
      const data = req.body;
      if (!isRiderValid(data)) {
         return Res.handleError(HTTP_BAD_REQUEST, err, res);
      }

      let rider = new RiderModal({
         firstname,
         lastname,
         nationality,
         image,
         phone_number,
         email,
         date,
      });
      rider
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
      const { phone_number } = req.body;
      DriverModal.find({ phone_number })
         .exec()
         .then((user) => {
            if (user.length < 1) {
               return Res.handleError(HTTP_SERVER_ERROR, 'error', res);
            } else {
               if (err) {
                  return Res.handleError(HTTP_SERVER_ERROR, err, res);
               }
               if (result) {
                  const SECRET_KEY = 'YOUR_SECURE_PASSWORD';
                  const token = jwt.sign(
                     {
                        firstname: user[0].firstname,
                        lastname: user[0].lastname,
                        nationality: user[0].nationality,
                        image: user[0].image,
                        phone_number: user[0].phone_number,
                        email: user[0].email,
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
            }
         })
         .catch((err) => Res.handleError(HTTP_SERVER_ERROR, 'error', res));
   }
}

export default RiderController;
