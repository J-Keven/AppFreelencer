import fs from 'fs';
import { resolve } from 'path';
import uploadsConfigs from '@configs/uploads';
import IStorageProvider from '../model/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  public async save(filename: string): Promise<string> {
    const { tempPath, uploadPath } = uploadsConfigs;
    await fs.promises.rename(
      resolve(tempPath, filename),
      resolve(uploadPath, filename),
    );
    return filename;
  }

  public async delete(filename: string): Promise<void> {
    // todoo
  }
}

export default DiskStorageProvider;
