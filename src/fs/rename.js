import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');

const oldFileName = 'files/wrongFilename.txt'
const newFileName = 'files/properFilename.md';
const errorMessage = 'FS operation failed';

const rename = async () => {
    try {
        await fs.rename(oldFileName, newFileName);
    } catch(e) {
        throw new Error(errorMessage);
    }
};

await rename();