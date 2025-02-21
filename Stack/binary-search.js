/**
 * Time Complexity => O(log N) - Logarithmic Time
 * @param {*} arr input array of N elements
 * @param {*} k   element to find
 * @returns number => position of 'k'
 */

function binarySearch (arr, k) {
    //if the input array is not sorted
    arr.sort((a,b) => a - b); // sorts array to ascending order  Note: this works without sorting as well but takes more time
    let left = 0, right = arr.length - 1;

    while(left <= right) {
        //find the middle element
        let mid = Math.floor((right + left) / 2);

        if(arr[mid] === k) return mid; //return when found

        if(arr[mid] < k) {
            left = mid + 1;     // if mid ele is smaller than k, move the left-end to mid+1 th element
        } else {
            right = mid - 1;    // if mid ele is greater than k, move the right-end to mid-1 th element
        }
    }

    return -1;      // Element not  found
}

/* Optimized solution to avoid overflow

    function binarySearch(arr, k) {
        let left = 0, right = arr.length - 1;
        
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2); // Avoid overflow
            
            if (arr[mid] === k) return mid;
            
            if (arr[mid] < k) left = mid + 1;
            else right = mid - 1;
        }
        
        return -1;
    }

*/


let n = [5, 7, 43, 66, 9, 10, 1];
let k = 43;
console.log(binarySearch(n, k));   // returns the position of k