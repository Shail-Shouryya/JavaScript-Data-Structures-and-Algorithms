# JavaScript Data Structures and Algorithms

## Helpful Resources:
[Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[Summing and averaging arrays](https://stackoverflow.com/questions/10359907/array-sum-and-average)

[Reduce method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Common Problem Types:
* frequency counter
  * use an object to store what you're looking for as keys and values
  * depending on the use case, might be better to store in key or value:
    * for checking if something is in second collection (usually a list), store the thing you'll be checking for as the key
    * if you need to know how many times it occurs, store the number of times it occurs as the value
    * try not to reference the value unless necessary, finding values in a object (hash table/dictionary, etc.) is a linear operation in Big O notation: O(n)
* multiple pointers
  * use cases: sorted array, checking string palindrome
  * have one pointer at the beginning of the list, one at the end, and work towards middle
  * increment the pointer at the beginning of the list, decrement the pointer at the end of the list
  * possible modifications:
    * check if largest two values are smaller than target - if so, return some kind of false output
    * check if smallest two values are larger than target - if so, return some kind of false output
    * use binary search somehow to reduce the number of elements that need to be checked?
* sliding windows
  * use cases: check if value of consecutive elements meets some target
