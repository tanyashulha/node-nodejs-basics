import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs');
const zlib = require('zlib');

const filePath = 'src/zip/files/fileToCompress.txt';

const fileToCompress = fs.createReadStream(filePath);
const destination = fs.createWriteStream('src/zip/files/archive.gz');

const compress = async () => {
  const compress = zlib.createGzip();
  await fileToCompress.pipe(compress).pipe(destination);
};

await compress();
