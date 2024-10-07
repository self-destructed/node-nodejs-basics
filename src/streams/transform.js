import { Transform } from 'stream';
import { EOL } from 'os';

const reverseTranform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join(''));
        callback();
    }
});

const newlineTransform = new Transform({
    transform(chunk, _, callback) {
        this.push(chunk + EOL);
        callback();
    }
});

const transform = async () => {
    process.stdin.pipe(reverseTranform).pipe(newlineTransform).pipe(process.stdout);
};

await transform();