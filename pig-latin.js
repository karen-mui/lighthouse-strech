const args = (process.argv).slice(2);

const translateToPigLatin = function(array) {
  let latin = ""
  for (let word of array) {
    for (let i = 1; i < word.length; i++) {
      latin += word[i]
    }
    latin += word[0] + "ay "
  }
  console.log(latin)
}

translateToPigLatin(args)