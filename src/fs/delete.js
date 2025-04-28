import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');

const fileToRemove = 'files/fileToRemove.txt'
const errorMessage = 'FS operation failed';

const remove = async () => {
    try {
        await fs.rm(fileToRemove);
    } catch(e) {
        throw new Error(errorMessage);
    }
};

await remove();