//  1-masala

// function reverseString(str) {
//     let chars = str.split("");
//     let reversed = chars.reverse();
//     let newStr = reversed.join("");
//     return newStr;
//   }
  
//   function reverseString(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       newStr += str[i];
//     }
//     return newStr;
//   }
  


// 2-masala

// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longest = "";
//     for (let word of words) {
//       if (word.length > longest.length) {
//         longest = word;
//       }
//     }
//     return longest;
//   }
  


// 3-masala

// function countVowels(str) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for (let char of str) {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
//     return count;
//   }
  



// 4-masala


// function checkPalindrome(str) {
//     let reversed = reverseString(str);
//     if (str == reversed) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  


// 5-masala


// function removeDuplicates(arr) {
//     let unique = [];
//     for (let element of arr) {
//       if (!unique.includes(element)) {
//         unique.push(element);
//       }
//     }
//     return unique;
//   }
  

// 6-masala

// function capitalizeWords(str) {
//     let words = str.split(" ");
//     let capitalized = [];
//     for (let word of words) {
//       let newWord = word[0].toUpperCase() + word.slice(1);
//       capitalized.push(newWord);
//     }
//     let newStr = capitalized.join(" ");
//     return newStr;
//   }
  

// 7-masala

// function findMissingNumber(arr) {
//     let sum = 0;
//     for (let num of arr) {
//       sum += num;
//     }
//     let n = arr.length;
//     let expectedSum = n * (n + 1) / 2;
//     let missing = expectedSum - sum;
//     return missing;
//   }
  