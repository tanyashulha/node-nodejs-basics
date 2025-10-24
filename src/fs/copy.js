import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');

const folderName = 'src/fs/files';
const copyFolderName = 'src/fs/files_copy';
const errorMessage = 'FS operation failed';

const copy = async () => {
  try {
    const files = await fs.readdir(folderName);
    await fs.mkdir(copyFolderName);
    files.forEach(f => {
      if(f.includes('.')) {
        fs.copyFile(`${folderName}/${f}`, `${copyFolderName}/${f}`);
      }
    });
  } catch(e) {
    throw new Error(errorMessage);
  }
};

await copy();
