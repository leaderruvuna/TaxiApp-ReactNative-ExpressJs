import mongoose from 'mongoose';

const ridesSchema = new mongoose.Schema({
   rider_id: { type: String, required: true },
   rider_names: { type: String, required: true },
   rider_phone_number: { type: String, required: true },
   curr_location: { type: String, required: true },
   curr_lat: { type: Number, required: true },
   curr_long: { type: Number, required: true },
   dest_location: { type: String, required: true },
   dest_lat: { type: Number, required: true },
   dest_long: { type: Number, required: true },
   distance: { type: Number, required: true },
   distance_unit: { type: String, required: true },
   price: { type: Number, required: true },
   currency: { type: String, required: true },
   status: {
      type: Number,
      required: true,
      Comment: '0:request,1:pending,2:accpeted,3:rejected,4:done',
   },
   driver_id: {
      type: String,
      Comment: 'Field provided on accepted status',
   },
   driver_names: {
      type: String,
      Comment: 'Field provided on accepted status',
   },
   driver_phone_number: {
      type: String,
      Comment: 'Field provided on accepted status',
   },
   driver_lat: {
      type: Number,
      Comment: 'Field provided on accepted status',
   },
   driver_long: {
      type: Number,
      Comment: 'Field provided on accepted status',
   },
   date: { type: String, required: true },
});
export default mongoose.model('rides', ridesSchema);
