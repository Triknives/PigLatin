
var vowels = /[aeiou]/i;
var alpha = /[a-z]/i;

var handleConsonants = function(word) {

  var consonantShift = function(letterArray) {
    if (letterArray[0] === "q" && letterArray[1] === "u") { // check the first letter and the second letter to see if they match q(0) u(1)
      var q = letterArray.shift(); // if so store "q" in q as we shift it out of letterArray
      var u = letterArray.shift(); // same thing for "u" into u
      letterArray.push(q,u);  // push q & u into the end of letterArray
      return letterArray.join('')+"ay"; // join letter array into a string and add "ay" to the end before returning
    } else if (!vowels.test(letterArray[0])) { // test to verify that the first letter is not a vowel
      var thisFirstLetter = letterArray.shift(); // shift the first consonant letter from letterArray into thisFirstLetter
      letterArray.push(thisFirstLetter); // push thisFirstLetter into the end of letterArray
      return consonantShift(letterArray); // return the result of a recursive call to consonantShift with the current state of letterArray
    } else { // if fails previous conditions
      return letterArray.join('')+"ay"; // Join letterArray back into a string and add "ay" before returning
    }
  }

  var letterArray = word.split(''); // Split word at every character and store as letterArray
  return consonantShift(letterArray); // return result of consonantShift with the argument of letterArray

};

var handleWord = function(word) {
  var endingPunctuation = "";
  if (!alpha.test(word[word.length-1])) {
    endingPunctuation = word[word.length-1];
    word = word.substring(0, word.length - 1);
  };
  if (!(alpha.test(word[0]))) { // test if first letter in the word is not an alpha letter
    return word + endingPunctuation; // if first letter is non-alpha, return word as it is
  } else if (vowels.test(word[0])) { // test if first letter is a vowel
    return word + "way" + endingPunctuation; // if first letter is a vowel, return word with "way" concatinated to the end
  } else { // if fails previous conditions
    return handleConsonants(word) + endingPunctuation; // return the result of handleConsonants with the argument of word
  }
}

var pigLatin = function(sentence) {
  var sentenceString = sentence.toString(); // gatekeep to make sure input is a string

  var wordArray = sentenceString.split(' '); // split sentenceString into an array at any space and store as wordArray
  var resultArray = []; // setting up empty array for results
  wordArray.forEach(function(word) { // target wordArray and open a loop that will iterate over every word
    resultArray.push(handleWord(word));  // push the return from handleWord with the argument of word into resultArray
  });
  return resultArray.join(' '); // Join resultArray back into a string with " " between each word and return
};



// USER INTERFACE
$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#result").text(pigLatin(userInput));

    $(".bg-info").hide();
    $(".bg-success").fadeIn();

  });
  $("#restart").click(function() {
    $("#userInput").val('');
    $(".bg-success").hide();
    $(".bg-info").fadeIn();
  });
});
