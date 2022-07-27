/**
 * @param {number[]} left
 * @param {number[]} right
 * @param {number[]} arr
 * @return {number[]}
 */
 var merge = function(left, right, arr) {
    let i = 0, l = 0, r = 0;
    
    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            arr[i] = left[l]; 
            l++; 
        } else {
            arr[i] = right[r];
            r++; 
        }
        i++;
    }
    
    while (l < left.length) {
        arr[i] = left[l];
        l++; 
        i++;
    }
    
    while (r < right.length) {
        arr[i] = right[r];
        r++; 
        i++; 
    }
    return arr; 
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var mergesort = function(arr) {
    if (arr.length <= 1) {return arr;}
    
    let mid = arr.length/2;
    let leftArr = arr.slice(0, mid); 
    let rightArr = arr.slice(mid); 
   
    mergesort(leftArr); 
    mergesort(rightArr);  
    
    return merge(leftArr, rightArr, arr); 
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let sortedArr = mergesort(nums); 
    return sortedArr; 
};