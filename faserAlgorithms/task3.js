// task3 : clea up your global scope by moving your cache inside your function

const memoizedClosureTimesM  = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache: ', n);
            return cache[n];
        }
        else {
            console.log('Calculating result ');
            let result = n * 10;
            cache[n] = result;
            return result;
        }
    };
};

// return function from memoizedAdd
const memoizedClosureTimes10 = memoizedClouserTimesM(10);
console.log('~~~~~~~Task 3~~~~~~');
console.log('Task 3 calculated value ', memoizedClosureTimes10(9));