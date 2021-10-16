import router from '../route';
import DriverController from '../../controllers/driver/auth';
router.post('/auth/driver/create', DriverController.create);
router.post('/auth/driver/login', DriverController.login);
export default router;
