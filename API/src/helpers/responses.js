/**
 * Handles responses and errors
 * @class Responses
 */
export default class Responses {
   /**
    * Handles success responses with data
    * @param {integer} statusCode - status code of the response
    * @param {string} message -  message of the response
    * @param {object} data - data passed to the response
    * @param {method} res - response method to pass the response in json
    * @return {object} returns a response
    */
   static handleSuccess(statusCode, message, data, res) {
      return res.status(statusCode).json({
         status: statusCode,
         message,
         data,
      });
   }

   /**
    * Handles success responses without data
    * @param {integer} statusCode - status code of the response
    * @param {string} message -  message of the response
    * @param {method} res - response method to pass the response in json
    * @return {object} returns a response
    */
   static handleOk(statusCode, message, res) {
      return res.status(statusCode).json({
         status: statusCode,
         message,
      });
   }

   /**
    * Handles responses with data
    * @param {integer} statusCode - status code of the response
    * @param {string} error -  error of the response
    * @param {method} res - response method to pass the response in json
    * @return {object} returns a response
    */
   static handleError(statusCode, error, res) {
      return res.status(statusCode).json({
         status: statusCode,
         error,
      });
   }
}
