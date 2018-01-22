function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var position = i - 1;
    while (position >= 0 && array[position] > temp) {
      array[position + 1] = array[position];
      position--;
    }
    array[position + 1] = temp;
  }
  return array
}

module.exports = insertionSort