function sameFrequency(firstNum, secondNum) {
  // good luck. Add any arguments you deem necessary.
  //   if (firstNum.toString().length !== secondNum.toString().length){
  //       return false;
  //   }
  if (Math.ceil(Math.log10(firstNum)) !== Math.ceil(Math.log10(secondNum))) {
    return false;
  }
  firstString = firstNum.toString();
  secondString = secondNum.toString();
  firstObject = {};
  for (i = 0; i < firstString.length; i++) {
    firstObject[firstString[i]]
      ? ++firstObject[firstString[i]]
      : (firstObject[firstString[i]] = 1); //firstObject[i] ? ++firstObject[i] : (firstObject[i] = 1);
    console.log(firstObject);
    console.log('*************************');
  }

  //   for (i = 0; i < secondString.length; i++) {
  //     secondString[i] in firstObject ? firstObject[i]-- : return false);
  //   }
  for (let i = 0; i < secondString.length; i++) {
    let letter = secondString[i];
    console.log('Letter is', letter);
    // can't find letter or letter is zero then it's not an anagram
    if (!firstObject[letter]) {
      return false;
    } else {
      //   firstObject[letter] -= 1;
      --firstObject[letter];
    }
  }
  return true;
}

console.log(sameFrequency(123451, 154321));
console.log(sameFrequency(123452, 154421));
console.log(sameFrequency(123453, 15421));
console.log(sameFrequency(123454, 1543210));
console.log(sameFrequency(12345567, 15555567));
