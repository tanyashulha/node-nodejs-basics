const parseArgs = () => {
    const str = process.argv.slice(2).map((val, i) => {
        return (i % 2) ? `is ${val},`  : val;
    }).join(' ').toString();

    console.log(str.slice(0, -1));
};

parseArgs();