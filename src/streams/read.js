import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const fs = require('fs');
const filePath = 'src/streams/files/fileToRead.txt';

const read = async () => {
  fs.createReadStream(filePath, 'utf-8').pipe(process.stdout);
};

await read();