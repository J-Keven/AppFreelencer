import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const userRoutes = Router();

userRoutes.post('/', async (req, res) => {
  try {
    const createUserService = new CreateUserService();

    const user = await createUserService.execute(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

export default userRoutes;
