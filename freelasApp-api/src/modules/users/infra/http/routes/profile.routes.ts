import { Router } from 'express';
import multer from 'multer';
import uploadConfigs from '@configs/uploads';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const userRoutes = Router();
userRoutes.use(ensureAuthenticate);

// userRoutes.patch('/avatar', upload.single('avatar'), async (req, res) => {
//   return res.json('ok');
// });

export default userRoutes;
