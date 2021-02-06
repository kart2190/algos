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