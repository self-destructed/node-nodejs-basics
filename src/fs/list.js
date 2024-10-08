import { promises as fs } from 'fs';
import path from 'path';

import { getDirPath } from '../utils/getDirPath.js';

const list = async () => {
    try {
        const dirPath = getDirPath(import.meta.url);
        const targetDirPath = path.join(dirPath, 'files');
        const content = await fs.readdir(targetDirPath);

        console.log(content)

        return content;
    } catch {
        throw Error('FS operation failed');
    }
};

list()
    .then(() => {
        console.info('Success');
    })
    .catch(err => {
        console.error(err.message);
    });
