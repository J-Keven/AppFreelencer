import { Router } from 'express';
import { container } from 'tsyringe';
import AuthenticatedService from '../services/AutheticadedService';

const sessionRutes = Router();

sessionRutes.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const authenticatedService = container.resolve(AuthenticatedService);

    const token = await authenticatedService.execute({ email, password });

    return res.json(token);
  } catch (error) {
    return res.status(401).json(error.message);
  }
});

export default sessionRutes;
