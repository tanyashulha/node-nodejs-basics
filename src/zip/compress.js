import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs');
const zlib = require('zlib');

const filePath = 'files/fileToCompress.txt';

const fileToCompress = fs.createReadStream(filePath);
const destination = fs.createWriteStream('files/archive.gz');

const compress = async () => {
    const compress = zlib.createGzip();
    await fileToCompress.pipe(compress).pipe(destination);
};

await compress();