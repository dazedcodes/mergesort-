var swap = function(arr, x, y) {
    let temp = arr[x]; 
    arr[x] = arr[y]; 
    arr[y] = temp;
};

var partition = function(arr, low, high) { // Time Complexity: O(n) **swap() takes O(1) time
    let pivot = arr[high]; 
    let i = (low - 1); 
    
    for (let j = low; j <= high - 1; j++) { 
        if (arr[j] < pivot) {
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr, i + 1, high); 
    return (i + 1); 
};

var quickSort = function(arr, low, high){ // Time Complexity: O(n*log(n)) **partition the array log(n) number of times**
    if (low < high) {
        let pi = partition(arr, low, high); 
    
        quickSort(arr, low, pi - 1); 
        quickSort(arr, pi + 1, high); 
    }
    return arr; 
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let left = 0; 
    let right = nums.length-1; 
    return quickSort(nums, left, right);  
};