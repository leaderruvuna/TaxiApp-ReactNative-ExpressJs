import mongoose from 'mongoose';
import baseEnvCall from '../../envCall/index';
export const testDbConnect = async () => {
   return await mongoose.createConnection(baseEnvCall.MONGODB_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });
};
export const testDbColse = async() => {
   return await mongoose.disconnect();
};
