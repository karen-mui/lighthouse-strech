// Your objective is to make the loopyLighthouse function log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".

const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i%multiples[0] === 0 && i%multiples[1] === 0) {
      console.log(words[0] + words[1])
    } else if (i%multiples[0] === 0) {
      console.log(words[0])
    } else  if (i%multiples[1] === 0) {
      console.log(words[1])
    } else {
      console.log(i)
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
