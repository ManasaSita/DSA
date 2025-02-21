# Time & Space Complexity Analysis (Big O Notation)

Understanding Big O Notation is crucial for analyzing the efficiency of algorithms in terms of time complexity (execution speed) and space complexity (memory usage).

## 🔹 1. What is Time Complexity?
Time Complexity describes how the runtime of an algorithm increases with the input size **N**. It helps compare different algorithms to determine which is more efficient.

### Common Time Complexities

| Big O    | Name                | Example                           |
|----------|---------------------|-----------------------------------|
| O(1)     | Constant Time       | Accessing an array element (`arr[i]`) |
| O(log N) | Logarithmic Time    | Binary Search                    |
| O(N)     | Linear Time         | Looping through an array         |
| O(N log N) | Linearithmic Time | Merge Sort, QuickSort (best/avg) |
| O(N²)    | Quadratic Time      | Nested loops (Bubble Sort)       |
| O(2^N)   | Exponential Time    | Recursion in Fibonacci (naive)   |
| O(N!)    | Factorial Time      | Traveling Salesman Problem       |

## 🔹 2. What is Space Complexity?
Space Complexity measures the amount of extra memory an algorithm needs. It consists of:

- **Fixed Space (O(1))** → Variables, constants, etc.
- **Dynamic Space (O(N))** → Depends on input size (e.g., recursion stack, extra arrays)

### Example:
- **O(1) Space** → Using only a few variables (e.g., swapping two numbers)
- **O(N) Space** → Storing extra arrays (e.g., Merge Sort)
- **O(N²) Space** → Using a 2D matrix (e.g., Dynamic Programming table)

## 🔹 3. Understanding Different Time Complexities

### O(1) - Constant Time
Regardless of input size, the operation takes a fixed amount of time.

```js
function getFirstElement(arr) {
    return arr[0]; // Always takes the same time
}
```
✅ Best Case: Fastest algorithm!

### O(log N) - Logarithmic Time
Each step reduces the problem size by a factor (e.g., Binary Search).

```js
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```
✅ Fast for large inputs (E.g., Searching in 1 million elements takes ~20 steps).

### O(N) - Linear Time
Performance grows proportionally to the input size.

```js
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
```
✅ Good for small/medium data.

### O(N log N) - Linearithmic Time
Algorithms like Merge Sort and QuickSort divide the problem and process it.

```js
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
```
✅ Much faster than O(N²) sorting algorithms.

### O(N²) - Quadratic Time
Nested loops cause quadratic complexity.

```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
```
❌ Slow for large inputs (E.g., Sorting 10,000 items takes ~100M operations!).

### O(2^N) - Exponential Time
Recursion where each call spawns multiple calls.

```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```
❌ Very slow (Fibonacci(40) takes billions of steps!)

✅ Optimization: Use Memoization (Dynamic Programming).

### O(N!) - Factorial Time
Occurs in Backtracking problems like N-Queens, Traveling Salesman.

```js
function permute(arr, l, r) {
    if (l == r) console.log(arr);
    for (let i = l; i <= r; i++) {
        [arr[l], arr[i]] = [arr[i], arr[l]];
        permute(arr, l + 1, r);
        [arr[l], arr[i]] = [arr[i], arr[l]]; // Backtrack
    }
}
```
❌ Worst-case scenario (N = 10 → 3,628,800 possibilities!).

## 🔹 4. Comparison of Complexities

| Complexity | Input: 10 | Input: 100 | Input: 10,000 |
|------------|-----------|------------|--------------|
| O(1)       | Instant   | Instant    | Instant      |
| O(log N)   | 3         | 7          | 14           |
| O(N)       | 10        | 100        | 10,000       |
| O(N log N) | 30        | 700        | 140,000      |
| O(N²)      | 100       | 10,000     | 100M (Slow!) |
| O(2^N)     | 1024      | 10³⁰       | 🔥 Too Slow! |
| O(N!)      | 3.6M      | 🔥 Too Slow | 🔥 Impossible! |

✅ **Ideal Goal**: Optimize your algorithm to be **O(log N), O(N), or O(N log N)** whenever possible!

## 🔹 5. Practical Applications

| Big O    | Used In |
|----------|---------------------------------|
| O(1)     | Hash Table Lookup, Direct Access |
| O(log N) | Binary Search, Tree Operations  |
| O(N)     | Traversing Arrays, Linear Search |
| O(N log N) | Efficient Sorting (Merge Sort) |
| O(N²)    | Brute-force Algorithms, Bubble Sort |
| O(2^N)   | Fibonacci (Recursion), Subset Generation |
| O(N!)    | Backtracking, Traveling Salesman |

## 🔹 6. How to Improve Algorithm Efficiency?
- Use **Hashing (O(1))** instead of **Linear Search (O(N))**
- Use **Sorting + Binary Search (O(log N))** instead of **O(N²) nested loops**
- Apply **Dynamic Programming (O(N))** instead of **Recursion (O(2^N))**
- Use efficient data structures like **Heaps, Tries, Graphs**
