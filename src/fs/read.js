import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');

const fileToRead = 'files/fileToRead.txt';
const errorMessage = 'FS operation failed';

const read = async () => {
    try {
        await fs.access(fileToRead);
        const data = await fs.readFile(fileToRead, 'utf8');
        console.log(data);
    } catch(e) {
        throw new Error(errorMessage);
    }
};

await read();