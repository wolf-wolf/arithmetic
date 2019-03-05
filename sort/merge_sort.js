let count = 1;
let divideCount = 1;

function mergeSort(arr) {
    const merge = (left, right) => {
        let res = [];

        let output = `m${count++}:  ${JSON.stringify(left)}  +  ${JSON.stringify(right)}`;

        while (left.length > 0 && right.length > 0) {
            res.push(left[0] <= right[0] ? left.shift() : right.shift());
        }

        res.push(...left, ...right); // 存在left和right还有剩余元素的情况
        output += `====>   ${JSON.stringify(res)}`
        console.info(output)
        return res;
    };

    if (arr.length === 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);

    console.info(`d${divideCount++}:  ${JSON.stringify(left)}  +  ${JSON.stringify(right)}`);

    return merge(mergeSort(left), mergeSort(right));
}

console.info('input: [8, 4, 5, 7, 1, 3, 6, 2, 9]')
const res = mergeSort([8, 4, 5, 7, 1, 3, 6, 2, 9]);

console.info(res);
