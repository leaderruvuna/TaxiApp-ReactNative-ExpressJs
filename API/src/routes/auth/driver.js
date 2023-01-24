import router from '../route';
import DriverController from '../../controllers/driver/auth';
router.post('/auth/driver/create', DriverController.create);
router.post('/auth/driver/login', DriverController.login);
router.post('/auth/driver/reset/password', DriverController.resetPassword);
router.get('/auth/driver/find/:userid', DriverController.findUser);
router.get(
   '/auth/driver/find/email/:email',
   DriverController.findUserBeforeResetPassword,
);
router.put('/auth/driver/update/:userid', DriverController.updateUser);
router.get(
   '/auth/driver/verify/user-acccount/:userid/:secret',
   DriverController.verifyUser,
);
router.get(
   '/auth/driver/confirm/code/:resetCode/:userid',
   DriverController.confirmResetPassword,
);
export default router;
