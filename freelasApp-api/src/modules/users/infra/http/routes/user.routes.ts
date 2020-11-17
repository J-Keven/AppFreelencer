import { Router } from 'express';
import multer from 'multer';
import uploadConfigs from '@configs/uploads';
import UserController from '../controllers/UserController';
import UpdateAvatarController from '../controllers/UpdateAvatarController';

const userRoutes = Router();
const upload = multer({
  storage: uploadConfigs.multer,
});

const userController = new UserController();
const updateAvatarController = new UpdateAvatarController();
userRoutes.post('/', userController.create);

userRoutes.patch('/', upload.single('avatar'), updateAvatarController.index);

export default userRoutes;
