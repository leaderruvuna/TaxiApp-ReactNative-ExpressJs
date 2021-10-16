import router from '../route';
import RidesController from '../../controllers/rider/rides';
router.post('/rides/create', RidesController.create);
router.get('/rides/findall', RidesController.listRides);
router.put('/rides/update/:ride_id', RidesController.update);
router.delete('/rides/delete/:ride_id', RidesController.deleteRide);
router.get('/rides/find/:ride_id', RidesController.readRide);
export default router;