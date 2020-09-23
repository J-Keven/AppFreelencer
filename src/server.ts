import express from 'express';
import routes from './routes';
import './database';
import logsMiddleware from './middlewares/logs';

const app = express();
app.use(express.json());

app.use(logsMiddleware);
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🚀 server started in http://localhost:${PORT}`);
});
