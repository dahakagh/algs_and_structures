const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(array, elem) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === elem) {
      return i;
    }
  }
  return null;
}
