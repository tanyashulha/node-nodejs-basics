const parseEnv = () => {
    const prefix = 'RSS_';
    const keys = Object.entries(process.env).reduce((map, [key, value]) => {
        if (key.indexOf(prefix) === 0) {
            map[key] = value;
        }
        return map;
    }, {})
    console.log(keys);
};

parseEnv();