// Merge Sort
// In merge sort algorithm,the array is divided into into half until it cannot be 
// further divided,and combined in a particular sorted manner.

function numsArray(array){
    if(array.length<=1){
        return array
    }
let middle = Math.floor(array.length/2);
let left = array.slice(0,middle);
let right = array.slice(middle);
return sortedArray(numsArray(left),numsArray(right));
}
function sortedArray(left,right){
let emptyArray = [];
while(left.length && right.length){
    if(left[0] < right[0]){
        emptyArray.push(left.shift());
    }
    else{
        emptyArray.push(right.shift());
    }
    return [...emptyArray,...left,...right]
}
}
let array = [4,8,1,90,35,23,100];
console.log(numsArray(array))

// Implement a function that performs a recursive merge sort. The function should 
// be recursive and takes in an array of integers.The output should be an array with 
// the input sorted in ascending order.

// Merge sort is a recursive algorithm that divides and conquers.It continously divides
// the input array into two halves until it cannot be further divided.

function divideArray(num){;
    if(num.length<=1){; 
    return(num);
    }
    

let middle = Math.floor(num.length/2);
let left = num.slice(0,middle);
let right = num.slice(middle);
return sortedArray(divideArray(left),divideArray(right));
}

function sortedArray(left,right){
     emptyArray = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift());
        }
        
}
return [...emptyArray,...left,...right]
}
let num = [9,3,6,2,1,11];
console.log(divideArray(num));

// NB...The process of merge sort is to divide the array into two halves,sort each
// half,and then merge the sorted halves back together 

// Binary Search
// Binary search is used to search for any element in a sorted array.
// When given a sorted arrays of numbers the task is to search for a given element 
// in the array using binary search.

 
function binary (num3,target){
    let left = 0;
    let right = num3.length -1;
    while(left <= right){ 
    let middle = Math.floor((left + right)/2);
    if(num3[middle] === target){
            return middle;
        }
        else if(num3[middle] < target){
            left = middle+1;
        }
        else{
            right = middle-1;
        }
    
}
return null
}
let num3 = [9,34,56,78,99];
let target = 56;
console.log(binary(num3,target));

// Example..
// // Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// // let num = [45,12,6,89,2,5]
// let target = 6
function binary (num2,target1){
    let left = 0;
    let right = num2.length -1;
    while(left <= right){ 
    let middle = Math.floor((left + right)/2);
    if(num2[middle] === target1){
            return middle;
        }
        else if(num2[middle] < target1){
            left = middle+1;
        }
        else{
            right = middle-1;
        }
    
}
return null
}
let num2 = [5,9,23,56,89,123];
let target1 = 47;
console.log(binary(num2,target1));
    

