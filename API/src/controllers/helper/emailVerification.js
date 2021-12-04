import sendgrid from '@sendgrid/mail';
import baseEnv from '../../envCall/index';
import { HTTP_ACCESS_DENIED } from '../../core/constants/httpStatus';

/**
 *
 * @class EmailVerification
 */

export default class EmailVerification {
   /**
    * send email verification
    * @param {Object} payload
    * @param {string} payload._id
    * @param {string} payload.secret
    * @param {string} payload.email
    */

   static async sendVerificationEmail(payload) {
      sendgrid.setApiKey(baseEnv.SENDGRID_API_KEY);
      const { _id, secret, email } = payload;
      let senderEmail = baseEnv.SENDER_EMAIL;
      let receiverEmail = email;
      let driverId = _id;
      const msg = {
         to: `${receiverEmail}`,
         from: `${senderEmail}`,
         subject: 'TAXI APP account verification',
         text: `Email verification`,
         html: `Verify your account with this link : ${process.env.BASE_URL}/api/v1/auth/driver/verify/user-acccount/${driverId}/${secret}`,
      };
      let result = await sendgrid
         .send(msg)
         .then((res) => {
            return { message: 'success', status: res[0].statusCode };
         })
         .catch(() => {
            return { message: 'error', status: HTTP_ACCESS_DENIED };
         });
      return result;
   }
   /**
    * send reset password
    * @param {Object} payload
    * @param {string} payload._id
    * @param {string} payload.reset_code
    * @param {string} payload.email
    */
   static async sendResetPasswordEmail(payload) {
      sendgrid.setApiKey(baseEnv.SENDGRID_API_KEY);
      const { _id, reset_code, email } = payload;
      let senderEmail = baseEnv.SENDER_EMAIL;
      let receiverEmail = email;
      const msg = {
         to: `${receiverEmail}`,
         from: `${senderEmail}`,
         subject: 'TAXI APP reset password ',
         text: `Reset password `,
         html: `Here is your secret code:${reset_code}`,
      };
      let result = await sendgrid
         .send(msg)
         .then((res) => {
            return { message: 'success', status: res[0].statusCode };
         })
         .catch(() => {
            return { message: 'error', status: HTTP_ACCESS_DENIED };
         });
      return result;
   }
   /**
    * verify code expiration
    * @param {date} actualTime -
    * @param {date} updateTime -
    */
   static verifyCodeExpiration(actualTime, updatedTime) {
      //   let updatedTime = new Date('2021-01-04T14:29:16.430Z');
      //   let actualTime = new Date('2021-01-04T14:31:54.514Z');
      let diff = Math.abs(actualTime - updatedTime) / 1000;
      let minutes = Math.floor(diff / 60) % 60;
      console.log(minutes);
      if (minutes > 2) {
         return true;
      }
      return false;
   }
}
