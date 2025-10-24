import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs');
const zlib = require('zlib');

const filePath = 'src/zip/files/fileToCompress.txt';
const compressedFilePath = 'src/zip/files/archive.gz';

const fileToCompress = fs.createReadStream(filePath);
const destination = fs.createWriteStream(compressedFilePath);

const compress = async () => {
  const compress = zlib.createGzip();
  await fileToCompress.pipe(compress).pipe(destination);
};

await compress();
