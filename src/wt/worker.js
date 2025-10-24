import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { workerData, parentPort } = require('worker_threads');

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (res) => {
  parentPort.postMessage(res);
};

sendResult(nthFibonacci(workerData));
