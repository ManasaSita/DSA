/**
 *  Sliding Window
 */

function lengthOfLongestSubstringTwoDistinct(s) {
  let left = 0, maxLen = 0;
  const charCount = new Map();

  for (let right = 0; right < s.length; right++) {
    charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

    while (charCount.size > 2) {
      charCount.set(s[left], charCount.get(s[left]) - 1);
      if (charCount.get(s[left]) === 0) charCount.delete(s[left]);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log(lengthOfLongestSubstringTwoDistinct("eceba")); // Output: 3 ("ece")


/**
 * 
 * Two Pointers
 * 
 */

function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }

  return [-1, -1]; // No solution found
}
console.log(twoSumSorted([1, 2, 3, 4, 6], 6)); // Output: [1, 3]


/**
 * 
 * Sorting-based 
 * 
 */

function smallestDifference(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0, j = 0, minDiff = Infinity;
  
  while (i < arr1.length && j < arr2.length) {
    minDiff = Math.min(minDiff, Math.abs(arr1[i] - arr2[j]));
    
    if (arr1[i] < arr2[j]) i++;
    else j++;
  }

  return minDiff;
}
console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])); // Output: 3 (11, 8)
