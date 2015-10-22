var translate = function(word) {
  var result = "";
  var firstLetter = word.substr(0,1);
  var endWord = word.substr(1);

  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "y", "z"];
  if (vowels.indexOf(firstLetter) >= 0) {
    result = word + "ay";
  //} else if (consonants.indexOf(firstLetter) >=0) {
  //  result = endWord + consonants + "ay";
  }
  else {
    result = "ananabay";
  }
  return result
}

// var firstLetter = function(word) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   if (word.startsWith("vowels")) {
//     return ("Eat" + "ay");
//   };
//};
