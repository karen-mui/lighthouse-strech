// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

const args = (process.argv).slice(2)[0]

function obfuscate(password) {
  let obfuscatedPassword = "" 
  for (let letter of password) {
    if (letter === "a") {
      obfuscatedPassword += "4";
    } else if (letter === "e") {
      obfuscatedPassword += "3";
    } else if (letter === "o") {
      obfuscatedPassword += "0"
    } else if (letter === "l") {
      obfuscatedPassword += "1"
    } else {
      obfuscatedPassword += letter;
    }
  }
  console.log(obfuscatedPassword)
}

obfuscate(args);