import mongoose from 'mongoose';

const riderSchema = new mongoose.Schema({
   firstname: { type: String, required: false },
   lastname: { type: String, required: false },
   nationality: { type: String, required: false },
   image: { type: String, required: false },
   phone_number: { type: String, required: true, unique: true },
   email: { type: String, required: false, unique: true },
   secret: { type: String, required: true},
   activated: { type: Boolean, required: true,default:false},
   date: { type: String, required: true },
});
export default mongoose.model('riders', riderSchema);
