import Res from '../helpers/responses';
import jwt from 'jsonwebtoken';
import { HTTP_UNAUTHORIZED } from '../core/constants/httpStatus';
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const authorize = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'YOUR_SECURE_PASSWORD');
      const userId = decodedToken.user_id;
      if (req.body.userId && req.body.user_id !== userId) {
         Res.handleError(HTTP_UNAUTHORIZED, 'UNAUTHORIZED', res);
      } else {
         next();
      }
   } catch {
      Res.handleError(HTTP_UNAUTHORIZED, 'UNAUTHORIZED', res);
   }
};
export default authorize;
