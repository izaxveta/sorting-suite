function bubbleSort(array) {
  var length = array.length;
  for (var i = length-1; i >= 0; i--) {
    for (var position = (length - i); position > 0; position--) {
      if (array[position] < array[position-1]) {
        var temp = array[position];
        array[position] = array[position-1];
        array[position-1] = temp;
      }
    }
  }
  return array
}

module.exports = bubbleSort