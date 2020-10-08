import express from 'express';
import 'reflect-metadata';
import '../typeorm';

import routes from './routes';
import logsMiddleware from './middlewares/logs';

import '../../container';

const app = express();
app.use(express.json());

app.use(logsMiddleware);
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🚀 server started in http://localhost:${PORT}`);
});
