import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const filePath = 'files/script.js';
const spawn = require('child_process').spawn;

const spawnChildProcess = async (args) => {
    const child = spawn(`node`, [filePath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit'],
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    return new Promise((res, rej) => {
        child.stdout.on('data', (data) => {
            res(`data: ${data}`);
        });
        
        child.on('exit', (code) => {
            rej(`on exit ${code}`);
        });
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['fff', 'ggg', 'ttt']);
