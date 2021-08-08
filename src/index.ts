import 'reflect-metadata';
import express from 'express';

import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
