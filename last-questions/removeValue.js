//Remove Vowels from a String.

const removeVowels = (str) => {
    return str.replace(/[aeiou]/gi,'');
}

console.log(removeVowels('Hello world'))

//Custom Function

function disemvowel(str) {
    let strArr = str.split('');
    for (var x = 0; x < str.length; x++) {
      let char = str[x].toLowerCase();
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        strArr[x] = '';
      }
    }
    return strArr.join('');
  }
  console.log(disemvowel("Hello world"));