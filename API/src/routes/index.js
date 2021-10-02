import Res from '../helpers/responses';
import { HTTP_OK } from '../core/constants/httpStatus';
import driverRoute from './auth/driver';
import riderRoute from './auth/rider';
const apiVersion = '/api/v1/';

const router = (app) => {
   app.use(apiVersion);
   app.use(apiVersion, riderRoute);
   app.use(apiVersion, driverRoute);
   app.get('/', (req, res) => Res.handleOk(HTTP_OK, 'Taxi booking API', res));
};

export default router;
