import { createRequire } from 'module';
import os from 'os';

const require = createRequire(import.meta.url);
const { Worker } = require('worker_threads');
const cpuCount = os.cpus().length;

const performCalculations = async () => {
  let promisesArr = [];
  let startingCount = 10;

  console.log(cpuCount)

  Array.from({ length: cpuCount }).forEach(_ => {
    const worker = new Worker('./worker.js');
    const promise = new Promise((res, rej) => {
      worker.on('message', (data) => {
        res({
          status: 'resolved',
          data,
        });
      });

      worker.on('error', () => {
        rej({
          status: 'error',
          data: null,
        });
      });
    });

    promisesArr.push(promise);

    worker.postMessage(startingCount++);
  });

  return Promise.allSettled(promisesArr).then((res) => console.log(res));
};

await performCalculations();
