import dotenv from 'dotenv';

dotenv.config();

const baseEnv={
    MONGODB_URI:process.env.MONGODB_URI,
    MONGODB_URI_LOCAL:process.env.MONGODB_URI_LOCAL,
    MONGODB_URI_TEST:process.env.MONGODB_URI_TEST,
}
export default baseEnv;
