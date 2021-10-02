import mongoose from 'mongoose';

const riderSchema = new mongoose.Schema({
   firstname: { type: String, required: true },
   lastname: { type: String, required: true },
   nationality: { type: String, required: true },
   image: { type: String, required: true },
   phone_number: { type: String, required: true, unique: true },
   email: { type: String, required: true, unique: true },
   date: { type: String, required: true },
});
export default mongoose.model('riders', riderSchema);
