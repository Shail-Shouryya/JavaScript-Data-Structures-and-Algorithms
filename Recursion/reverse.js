function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  reverseArr = [];
  if (str) {
    return reverseArr.push(str.slice(-1).concat(reverse(str.slice(0, -1))));
  }
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
