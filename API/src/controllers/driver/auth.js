import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';
import Res from '../../helpers/responses';
import ResponseView from '../../helpers/responseviews';
import DriverModal from '../../models/driver';
import {
   HTTP_SERVER_ERROR,
   HTTP_CREATED,
   HTTP_OK,
   HTTP_BAD_REQUEST,
} from '../../core/constants/httpStatus';
import { hashPassword } from '../../utils/password';
import { isDriverValid } from '../../utils/validator/users';
import createSecret from '../../utils/secretCode';
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
      const { error } = isDriverValid(data);
      if (error) {
         let errorMessage = error.details[0].message;
         return Res.handleError(HTTP_BAD_REQUEST, `${errorMessage}`, res);
      }
      let hashPass = hashPassword(data.password);
      const secret = createSecret();
      let driver = new DriverModal({
         firstname:data.firstname,
         lastname:data.lastname,
         nationality:data.nationality,
         image:data.image,
         country_code:data.country_code,
         phone_number:data.phone_number,
         driving_licence:data.driving_licence,
         licence_number:data.licence_number,
         email:data.email,
         password: hashPass,
         secret,
         date:data.date,
         location: { type: 'Point', coordinates: [data.location[0], data.location[1]] },
      });
      driver
         .save()
         .then(async (result) => {
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
      await DriverModal.find({ email })
         .exec()
         .then((user) => {
            if (user.length < 1) {
               return Res.handleError(HTTP_NOT_FOUND, 'error', res);
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
                        'DRIVER SUSCCESSFULLY LOGEDIN',
                        token,
                        res,
                     );
                  }
                  return Res.handleError(HTTP_SERVER_ERROR, 'error', res);
               });
            }
         })
         .catch((err) => Res.handleError(HTTP_SERVER_ERROR, 'error', res));
   }
   /**
    * read user
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async findUser(req, res) {
      DriverModal.findOne({ _id: req.params.userid }, (err, user) => {
         if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
         Res.handleOk(HTTP_OK, user, res);
      });
   }
   /**
    * update user
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async updateUser(req, res) {
      DriverModal.findOneAndUpdate(
         { _id: req.params.userid },
         req.body,
         { new: true },
         (err, user) => {
            if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
            Res.handleOk(HTTP_OK, user, res);
         },
      );
   }
   /**
    * verify user
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async verifyUser(req, res) {
      const { secret, userid } = req.params;
      DriverModal.findOneAndUpdate(
         { _id: userid },
         { verified: true },
         { new: true },
         (err, user) => {
            if (err) {
               let failureMessage =
                  'Your account verification failed.Try again later!';
               ResponseView.failedVerification(failureMessage, res);
            }
            let successMessage = `${user.firstname}-${user.lastname} , Your account is successfully verified!<br> You can go and login.`;
            ResponseView.successVerification(successMessage, res);
         },
      )
         .where('secret')
         .equals(secret);
   }
   /**
    * find user before reset password
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async findUserBeforeResetPassword(req, res) {
      let resetConfirmCode = secretCode();
      let updatedTime = new Date();
      DriverModal.findOne({ email: req.params.email }, (err, user) => {
         if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
         if (user == null) {
            Res.handleError(HTTP_NOT_FOUND, 'User does not exist', res);
         } else {
            UserModel.findOneAndUpdate(
               { _id: user._id },
               { reset_code: resetConfirmCode, updated: updatedTime },
               { new: true },
               async (err, user) => {
                  if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
                  await Verification.sendResetPasswordEmail(user);
                  Res.handleOk(HTTP_OK, user, res);
               },
            );
         }
      });
   }
   /**
    * confirm reset password
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async confirmResetPassword(req, res) {
      let actualTime = new Date();
      DriverModal.findOne({ _id: req.params.userid }, (err, user) => {
         if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
         if (user == null) {
            Res.handleError(HTTP_NOT_FOUND, 'User does not exist', res);
         } else {
            let updatedTime = user.updated;
            let hasCodeExpired = Verification.verifyCodeExpiration(
               actualTime,
               updatedTime,
            );
            if (hasCodeExpired) {
               Res.handleError(HTTP_ACCESS_DENIED, 'Code has expired ', res);
            } else {
               if (req.params.resetCode === user.reset_code) {
                  Res.handleOk(HTTP_OK, user, res);
               } else {
                  Res.handleError(HTTP_ACCESS_DENIED, 'Incorrect code', res);
               }
            }
         }
      });
   }

   /**
    * reset password
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */

   static async resetPassword(req, res) {
      const { userid, password } = req.body;
      let hashedPassword = hashPassword(password);
      DriverModal.findOneAndUpdate(
         { _id: userid },
         { password: hashedPassword },
         { new: true },
         (err, user) => {
            if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
            Res.handleOk(HTTP_OK, user, res);
         },
      );
   }
}

export default DriverController;
