import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');
const fse = require('fs-extra');

const folderName = 'files'
const copyFolderName = 'files_copy';
const errorMessage = 'FS operation failed';

const copy = async () => {
    try {
        await fs.access(folderName);
        await fs.mkdir(copyFolderName);
        await fse.copy(folderName, copyFolderName);
    } catch(e) {
        throw new Error(errorMessage);
    }
};

await copy();
