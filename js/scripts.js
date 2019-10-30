var vowels = {a:true, e:true, i:true, o:true, u:true, "A":true, "E":true, "I":true, "O":true, "U":true};

var handleConsonants = function(word) {

  var consonantShift = function(array) {
    if (array[0] === "q" && array[1] === "u") {
      var q = array.shift();
      var u = array.shift();
      array.push(q,u);
      return array.join('')+"ay";
    } else if (!vowels[array[0]]) {
      var thisFirstLetter = array.shift();
      array.push(thisFirstLetter);
      return consonantShift(array);
    } else {
      return array.join('')+"ay";
    }
  }

  var array = word.split('');
  return consonantShift(array);

};

var handleWord = function(word) {
  if (!(/[a-zA-Z]/.test(word[0]))) {
    return word;
  } else if (vowels[word[0]]) {
    return word + "way";
  } else {
    return handleConsonants(word);
  }
}

var pigLatin = function(sentence) {
  var sentenceString = sentence.toString();
  var wordArray = sentenceString.split(' ');
  var resultArray = [];
  wordArray.forEach(function(word) {
    resultArray.push(handleWord(word));
  });
  return resultArray.join(' ');
};

console.log(pigLatin('Pig Latin translator'));


"squeal"









//Function will take a string as its argument

//Function will return a string as its output








// For words beginning with "y", treat "y" as a consonant.

//The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.

// For words beginning with a vowel, add "way" to the end.

// If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
//
// For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
//
