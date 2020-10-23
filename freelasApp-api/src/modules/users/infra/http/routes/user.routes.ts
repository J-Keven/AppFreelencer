import { Router } from 'express';
import multer from 'multer';
import uploadConfigs from '@configs/multer';
import UserController from '../controllers/UserController';

const userRoutes = Router();
const upload = multer(uploadConfigs);

const userController = new UserController();
userRoutes.post('/', userController.create);

userRoutes.patch('/', upload.single('avatar'), async (req, res) => {
  return res.json('ok');
});

export default userRoutes;
