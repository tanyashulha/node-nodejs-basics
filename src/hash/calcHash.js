
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const fs = require('fs');
const crypto = require('crypto');
const stream = require('stream/promises');
const filePath = 'files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const fd = fs.createReadStream(filePath);
    const hash = crypto.createHash('sha256');
    await stream.pipeline(fd, hash);

    console.log(hash.digest('hex'));
};

await calculateHash();