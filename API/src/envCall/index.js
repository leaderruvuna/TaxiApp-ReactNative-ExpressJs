import dotenv from 'dotenv';

dotenv.config();

const baseEnv={
    MONGODB_URI:process.env.MONGODB_URI,
    MONGODB_URI_LOCAL:process.env.MONGODB_URI_LOCAL
}
export default baseEnv;
