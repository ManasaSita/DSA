/**
 * Time Complexity = O(N log N) - Linearithmic Time
 */

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let arr = [];
    let i = 0, j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]){
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }

    while(i < left.length) arr.push(left[i++]);
    while(j < right.length) arr.push(right[j++]);

    return arr;
}

let n = [5, 7, 43, 66, 9, 10, 1];
console.log(mergeSort(n));