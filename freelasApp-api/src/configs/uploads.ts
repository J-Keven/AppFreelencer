import multer from 'multer';
import { resolve } from 'path';
import crypto from 'crypto';

const filepath = resolve(__dirname, '..', '..', 'temp');
export default {
  tempPath: filepath,
  uploadPath: resolve(filepath, 'uploads'),

  multer: multer.diskStorage({
    destination: filepath,
    filename: (req, file, cb) => {
      const hash = crypto.randomBytes(8).toString('hex');
      const fileHash = `${hash}-${file.originalname}`;
      return cb(null, fileHash);
    },
  }),
};
