const cache = {} ;

const memoTimes10 = (n) => {
    const cache = {};
    if (n in cache) {
        console.log(`Fetching from cache`, n);
        return cache[n]
    } else {
        console.log('Calculating result');
        let result = times10(n);
        cache[n] = result;
        return result;
    }
};
