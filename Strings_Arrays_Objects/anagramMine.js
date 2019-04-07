// function validAnagram(string1, string2){
//   // add whatever parameters you deem necessary - good luck!
//   if (string1.length() !== string2.length()){
//       return false
//   }
//   for (let char of string1){
//     if (let char !in string2){
//         return false
//     }
//     else {
//         for (let string2_char of string2){

//         }
//     }
//   }
// }

function validAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
    return false;
  }
  let wordOne = {};
  let wordTwo = {};
  for (let char of firstWord) {
    if (firstWord[char]) {
      wordOne[char]++;
    } else {
      wordOne[char] = 1;
    }
  }
  for (let char of secondWord) {
    if (secondWord[char]) {
      ++wordTwo[char];
    } else {
      wordTwo[char] = 1;
    }
  }
  for (let key in wordOne) {
    if (!(key in wordTwo)) {
      return false;
    }
    if (wordOne[key] !== wordTwo[key]) {
      return false;
    }
    return true;
  }
}
