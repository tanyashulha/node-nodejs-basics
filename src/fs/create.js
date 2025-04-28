import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs/promises');

const filePath = 'files/fresh.txt';
const content = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
    try {
        await fs.open(filePath);
    } catch(e) {
        await fs.writeFile(filePath, content);
        return;
    }

    throw new Error(errorMessage);
};

await create();