
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const fs = require('fs');
const filePath = 'files/fileToRead.txt';

const read = async () => {
    await fs.createReadStream(filePath).pipe(process.stdout);
};

await read();