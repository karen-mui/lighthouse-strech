function flatten(array) {
  const unnestedArray = []

  function flattenHelper(array) {
    for (let element of array) {
      if (Array.isArray(element)) {
        flattenHelper(element)
      } else {
        unnestedArray.push(element)
      }
    }
  }

  flattenHelper(array)
  console.log(unnestedArray);
}



flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
