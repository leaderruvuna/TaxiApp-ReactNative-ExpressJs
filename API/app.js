import './src/models/index';
import express from 'express';
import router from './src/routes/index';
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
router(app);
export default app;
