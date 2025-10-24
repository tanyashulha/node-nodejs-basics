import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { Transform } = require('stream');

const reverse = new Transform({
  transform(chunk, _, callback) {
    callback(null, chunk.toString().split('').reverse().join(''));
  },
});

const transform = async () => {
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();