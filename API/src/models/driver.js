import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
   firstname: { type: String, required: true },
   lastname: { type: String, required: true },
   nationality: { type: String, required: true },
   image: { type: String, required: true },
   phone_number: { type: String, required: true, unique: true },
   driving_licence: { type: String, required: true },
   licence_number: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   date: { type: String, required: true },
});
export default mongoose.model('drivers', driverSchema);
