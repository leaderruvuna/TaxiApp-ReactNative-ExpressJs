import sendgrid from '@sendgrid/mail';
import baseEnv from '../../envCall/index';
import { HTTP_ACCESS_DENIED } from '../../core/constants/httpStatus';

/**
 *
 * @class NearBy
 */

export default class NearBy {
   /**
    * send email verification
    * @param {Object} payload
    * @param {string} payload._id
    * @param {string} payload.secret
    * @param {string} payload.email
    */

   static async getNearByDrivers(payload) {
      
   }
   
}
