import Res from '../../helpers/responses';
import {
   HTTP_SERVER_ERROR,
   HTTP_CREATED,
   HTTP_OK,
   HTTP_BAD_REQUEST,
} from '../../core/constants/httpStatus';
import RidesModal from '../../models/rides';
import { isRideValid } from '../../utils/validator/users';
/**
 * Rides Controller
 */
class RidesController {
   /**
    * Create a ride
    * @param {*} req
    * @param {*} res
    * @returns {string|object} ride payload
    */
   static async create(req, res) {
      const data = req.body;
      if (!isRideValid(data)) {
         return Res.handleError(HTTP_BAD_REQUEST, err, res);
      }

      let rides = new RidesModal(data);
      rides
         .save()
         .then((result) => {
            return Res.handleOk(HTTP_CREATED, result, res);
         })
         .catch((err) => {
            return Res.handleError(HTTP_SERVER_ERROR, err, res);
         });
   }
   /**
    * udpate ride
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async update(req, res) {
      const data = req.body;
      if (!isRideValid(data)) {
         return Res.handleError(HTTP_BAD_REQUEST, err, res);
      }
      RidesModal.findOneAndUpdate(
         { _id: req.params.ride_id },
         data,
         { new: true },
         (err, ride) => {
            if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
            Res.handleOk(HTTP_OK, ride, res);
         },
      );
   }
   /**
    * delete ride
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async deleteRide(req, res) {
      RidesModal.deleteOne({ _id: req.params.ride_id }, (err) => {
         if (err) res.send(err);
         Res.handleOk(HTTP_OK, 'successfully deleted', res);
      });
   }

   /**
    * list rides
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async listRides(req, res) {
      RidesModal.find({}, (err, rides) => {
         if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
         Res.handleOk(HTTP_OK, rides, res);
      });
   }
   /**
    * read ride
    * @param {*} req
    * @param {*} res
    * @returns {string|object}
    */
   static async readRide(req, res) {
      RidesModal.findById(req.params.ride_id, (err, ride) => {
         if (err) Res.handleError(HTTP_SERVER_ERROR, 'error', res);
         Res.handleOk(HTTP_OK, ride, res);
      });
   }
}

export default RidesController;
