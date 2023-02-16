import router from '../route';
import RiderController from '../../controllers/rider/auth';
import authorize from '../../middlewares/tokenValidation';
router.post('/auth/rider/create', RiderController.create);
router.post('/auth/rider/login', RiderController.login);
router.post('/auth/rider/verify', RiderController.verifyPhone);
router.put('/auth/rider/profile/update', RiderController.updateProfile);
export default router;
