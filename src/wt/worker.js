import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const p = require('worker_threads');

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    p.parentPort.on('message', (n) => {
        const result = nthFibonacci(n);
        p.parentPort.postMessage(result);
    });
};

sendResult();