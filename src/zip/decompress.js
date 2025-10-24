import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs');
const zlib = require('zlib');

const compressedFilePath = 'src/zip/files/archive.gz';
const filePath = 'src/zip/files/fileToCompress.txt';

const fileToDecompress = fs.createReadStream(compressedFilePath);
const destination = fs.createWriteStream(filePath);

const decompress = async () => {
  const decompress = zlib.createGunzip();
  await fileToDecompress.pipe(decompress).pipe(destination);
};

await decompress();