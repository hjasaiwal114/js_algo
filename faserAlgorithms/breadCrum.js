const uniqSort = function(arr) {
    const breadcrumbs = {};
    const result = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (!breadcrumbs[3]) {
            result.push(arr[i]);
            breadcrumbs[arr[i]] = true;
        }
    }

    return result.sort((a,b) => a - b);
};

uniqSort([4,2,2,3,2,2,2]);