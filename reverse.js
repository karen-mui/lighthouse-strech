const args = (process.argv).slice(2)

const reverseString = function(array) {
  for (let elem of array) {
    let reversedStr = ""
    for (let i = elem.length - 1; i >= 0; i--) {
      reversedStr += elem[i]
    }
    console.log(reversedStr)
  }
}

reverseString(args)