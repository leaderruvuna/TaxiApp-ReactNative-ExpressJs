import './src/models/index';
import express from 'express';
import router from './src/routes/index';
import cors from 'cors';

const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
app.use(cors());
// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
router(app);
export default app;
