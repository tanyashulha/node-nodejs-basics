import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const fs = require('fs');
const filePath = 'src/streams/files/fileToWrite.txt';

const write = async () => {
  const file = fs.createWriteStream(filePath);
  process.stdin.pipe(file);
};

await write();
