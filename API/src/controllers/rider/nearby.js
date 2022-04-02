import sendgrid from '@sendgrid/mail';
import baseEnv from '../../envCall/index';
import { HTTP_ACCESS_DENIED } from '../../core/constants/httpStatus';
import DriverModel from '../../models/driver';
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
      DriverModel.aggregate([
         {
            $geoNear: {
               near: { type: 'Point', coordinates: [lat, long] },
               distanceField: 'dist.calculated',
               maxDistance: distance,
               query: { category: '' },
               includeLocs: 'dist.location',
               spherical: true,
            },
         },
      ])
         .then((result) => {
            Res.handleOk(HTTP_OK, result, res);
         })
         .catch((err) => {
            Res.handleError(HTTP_SERVER_ERROR, err, res);
         });
   }
}
