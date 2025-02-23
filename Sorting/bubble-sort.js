/**
 * 
 * @param {*} arr input array of N elements
 * @returns sorted array with N elements
 */

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) { 
        swapped = false; // Track if a swap happens

        for (let j = 0; j < n - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) { 
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps occurred, the array is already sorted
        if (!swapped) break;
    }

    return arr;
}

let n = [5, 7, 43, 66, 9, 10, 1];
console.log(bubbleSort(n));