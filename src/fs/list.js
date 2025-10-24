import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');

const folderName = 'src/fs/files';

const list = async () => {
  try {
    await fs.access(folderName);
    const files = await fs.readdir(folderName);
    files.forEach(f => { console.log(f) });
  } catch(e) {
    throw new Error(errorMessage);
  }
};

await list();