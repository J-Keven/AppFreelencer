import { Router } from 'express';
import multer from 'multer';
import uploadConfigs from '@configs/multer';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const userRoutes = Router();
const upload = multer(uploadConfigs);
userRoutes.use(ensureAuthenticate);

userRoutes.patch('/avatar', upload.single('avatar'), async (req, res) => {
  return res.json('ok');
});

export default userRoutes;
