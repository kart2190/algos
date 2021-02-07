//Common patterns

// - Frequency Counter
// - Multiple Pointers
// - Sliding Window
// - Divide and Conquer
// - Dynammic Prgramming
// - Greedy Algorithms
// - Backtracking



//Frequnecy counter aproaches

// String compare using hash
// Using hash to speed up lookups and avoid nested loops

function anaGrams(str1, str2) {
    hash1 = {};

    for(let i=0; i < str1.length; i++) {
        if(hash1[str1[i]]){
            hash1[str1[i]] += 1;
        } else {
            hash1[str1[i]] = 1;
        }
    }

    for(let i=0; i <str2.length; i++) {
        let letter = str2[i];

        if(!hash1[letter]){
            return false;
        } else {
            hash1[letter] -= 1;
        }
    }

    return true;
}

console.log(anaGrams("hello", "ellho"));
console.log(anaGrams("qwertyuiop", "poiuytrewq"));

// Multiple Pointers

// sum zero problems
// Helps lookup linear values quickly

//beginning and end pointer approach
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1; // last index of the array

    if(arr){
        while(left < right){
            let sum = arr[left] + arr[right];
            if(sum == 0){
                return [arr[left], arr[right]];
            } else if(sum > 0){
                right--;
            } else {
                left++;
            }
        }
    }
}

console.log(sumZero([-11,-5,-4,-3,-2,-1,0,3,4,5,6,9]))

//countUniqueValues

//Given array count the unique values present in the array
//Has to be sorted

//Using two pointer approach from the beginning
function countUniqueValues(arr){
    let right = 1;
    let left = 0;

    if(arr.length === 0) return 0;
    while(left < right && arr.length > right ){
        if(arr[left] == arr[right]){
            right++;
        } else {
            left++;
            arr[left] = arr[right];
        }
    }

    return left+1;
}

console.log(countUniqueValues([1,1,1,1,1,1,1,2,2,3,3,3,3,3,4,7,9,10,10,11,19,27,27,32,64]))