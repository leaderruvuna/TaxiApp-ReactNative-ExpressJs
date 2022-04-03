import {
   HTTP_ACCESS_DENIED,
   HTTP_SERVER_ERROR,
   HTTP_OK,
} from '../../core/constants/httpStatus';
import DriverModel from '../../models/driver';
import Res from '../../helpers/responses';
/**
 *
 * @class NearBy
 */

export default class NearByController {
   /**
    * read ride
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async getNearByDrivers(req, res) {
      const { lat, long } = req.body;
      const { distance } = req.params;
      DriverModel.find({
         location: {
            $near: {
               $geometry: { type: 'Point', coordinates: [lat, long] },
               $minDistance: 0,
               $maxDistance: Number(distance),
            },
         },
      })
         .then((result) => {
            Res.handleOk(HTTP_OK, result, res);
         })
         .catch((err) => {
            Res.handleError(HTTP_SERVER_ERROR, err, res);
         });
   }
}
