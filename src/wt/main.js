import { createRequire } from 'module';
import os from 'os';

const require = createRequire(import.meta.url);
const { Worker } = require('worker_threads');
const cpuCount = os.cpus().length;
let startingCount = 10;

const performCalculations = async () => {
    let promisesArr = [];

    Array.from({ length: cpuCount }).forEach(_ => {
        const worker = new Worker('./worker.js');
        const promise = new Promise((res, rej) => {
            worker.on('message', (result) => {
                res({
                    status: 'resolved',
                    data: result,
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

    return Promise.allSettled(promisesArr);

};

await performCalculations();