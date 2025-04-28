import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');

const folderName = 'files';

const list = async () => {
    try {
        await fs.access(folderName);
        const array = await fs.readdir(folderName);
        array.forEach(file => { console.log(file) });
    } catch(e) {
        throw new Error(errorMessage);
    }
};

await list();