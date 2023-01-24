import baseEnv from '../../envCall/index';

/**
 *
 * @class PhoneVerification
 */

export default class PhoneVerification {
   /**
    * send email verification
    * @param {Object} payload
    * @param {string} payload._id
    * @param {string} payload.secret
    * @param {string} payload.phonenumber
    */

   static async sendVerificationPhone(payload) {
      const { phone_number, secret } = payload;
      const accountSid = baseEnv.TWILIO_ACCOUNT_SID;
      const authToken = baseEnv.TWILIO_AUTH_TOKEN;
      const fromNumber = baseEnv.TWILIO_SENDER_NUMBER;
      const toNumber = phone_number;
      const client = require('twilio')(accountSid, authToken);
      const result = client.messages
         .create({
            from: fromNumber,
            body: `Taxi App, Your verification code:${secret}`,
            to: toNumber,
         })
         .then((message) => {
            return { result: 'success', data: message };
         })
         .catch((err) => {
            return { result: 'error', data: err };
         });
      return result;
   }
}
