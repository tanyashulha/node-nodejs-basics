import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');

const oldFileName = 'src/fs/files/wrongFilename.txt'
const newFileName = 'src/fs/files/properFilename.md';
const errorMessage = 'FS operation failed';

const rename = async () => {
  try {
    fs.rename(oldFileName, newFileName);
  } catch(e) {
    throw new Error(errorMessage);
  }
};

await rename();