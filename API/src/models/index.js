import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbConnection = mongoose
   .connect(process.env.MONGODB_URI || process.env.MONGODB_URI_LOCAL, {
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
