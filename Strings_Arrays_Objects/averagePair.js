function averagePair(arr, targetAverage) {
  // add whatever parameters you deem necessary - good luck!
  //   let checkAverage = (arr[0] + arr[1]) / 2;
  //   if (checkAverage == targetAverage){
  //       return true
  //   }
  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      let checkAverage = (arr[i] + arr[i + 1]) / 2;
      if (checkAverage === targetAverage) {
        return true;
      }
    }
  } else return false;
}
