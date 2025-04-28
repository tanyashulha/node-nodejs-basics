import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs');
const zlib = require('zlib');

const filePath = 'files/archive.gz';

const fileToDecompress = fs.createReadStream(filePath);
const destination = fs.createWriteStream('files/fileToCompress.txt');

const decompress = async () => {
    const decompress = zlib.createGunzip();
    await fileToDecompress.pipe(decompress).pipe(destination);
};

await decompress();