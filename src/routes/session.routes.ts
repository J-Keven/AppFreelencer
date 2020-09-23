import { Router } from 'express';
import AuthenticatedService from '../services/AutheticadedService';

const sessionRutes = Router();

sessionRutes.post('/', async (req, res) => {
  const { email, password } = req.body;
  const authenticatedService = new AuthenticatedService();

  const token = await authenticatedService.execute({ email, password });

  return res.json(token);
});

export default sessionRutes;
