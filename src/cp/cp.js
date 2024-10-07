// import spawn from 'child_process';
import { spawn } from 'node:child_process';
import path from 'node:path';

import { getDirPath } from '../utils/getDirPath.js';


const spawnChildProcess = async (args) => {
    const dirPath = getDirPath(import.meta.url);
    const scriptPath = path.join(dirPath, 'files', 'script.js');
    console.log('args', args)
    const argumentsArr = args ?? [];
    const childProcess = spawn('node', [scriptPath, ...argumentsArr]);

    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    process.stdin.pipe(childProcess.stdin)


};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
// spawnChildProcess();