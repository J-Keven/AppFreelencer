import { Router } from 'express';
import multer from 'multer';
import uploadConfigs from '@configs/uploads';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UpdateAvatarController from '../controllers/UpdateAvatarController';

const profileRoutes = Router();
const upload = multer({
  storage: uploadConfigs.multer,
});
profileRoutes.use(ensureAuthenticate);

const updateAvatarController = new UpdateAvatarController();
profileRoutes.patch(
  '/avatar',
  upload.single('avatar'),
  updateAvatarController.index,
);

export default profileRoutes;
