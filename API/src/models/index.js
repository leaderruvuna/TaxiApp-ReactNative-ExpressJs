import mongoose from 'mongoose';
import envCall from '../envCall/index';
const { MONGODB_URI, MONGODB_URI_LOCAL } = envCall;
const dbConnection = mongoose
   .connect(MONGODB_URI || MONGODB_URI_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
   })
   .then(() => process.stdout.write(`Database connected >>>!`))
   .catch((err) =>
      process.stdout.write(`Database not connected >>>!: ${err}\n`),
   );

export default dbConnection;
