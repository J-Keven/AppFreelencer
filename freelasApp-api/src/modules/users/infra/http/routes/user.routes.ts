import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';
import CreateUserService from '@modules/users/services/CreateUserService';
import uploadConfigs from '@configs/multer';

const userRoutes = Router();
const upload = multer(uploadConfigs);
userRoutes.post('/', async (req, res) => {
  // try {
  const createUserService = container.resolve(CreateUserService);

  const user = await createUserService.execute(req.body);
  return res.json(user);
  // } catch (error) {
  // return res.status(400).json(error.message);
  // }
});

userRoutes.patch('/', upload.single('avatar'), async (req, res) => {
  return res.json('ok');
});

export default userRoutes;
