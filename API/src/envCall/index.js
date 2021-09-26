import dotenv from 'dotenv';

dotenv.config();

export default baseEnv={
    MONGODB_URI:process.env.MONGODB_URI,
    MONGODB_URI_LOCAL:process.env.MONGODB_URI_LOCAL
}
