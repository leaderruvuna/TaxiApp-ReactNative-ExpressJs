import router from '../route';
import RiderController from '../../controllers/rider/index';
router.post('/auth/rider/create', RiderController.create);
router.post('/auth/rider/login', RiderController.login);
export default riderRoute;
