import { WORDS } from './words.js'
import { WORDS2 } from './words.js'

// Add an event listener for the "Enter" key press on the whole document
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission behavior
        document.getElementById("submit").click(); // Trigger the click event on the submit button
    }
});

document.getElementById("addYellowRow").addEventListener("click", function() {
    const yellowLettersContainer = document.getElementById("yellow-letters-container");
    const newRow = document.createElement("div");
    newRow.className = "yellow-letter-row";
    for (let i = 0; i < 5; i++) {
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.className = "yellow-box";
        newInput.maxLength = 1;
        newRow.appendChild(newInput);
    }
    yellowLettersContainer.appendChild(newRow);
});


document.getElementById("submit").addEventListener("click", function() {
    const blackletters = document.getElementById("bbox").value.toLowerCase();
    const greenletters = [];
    const yellowletters = [];

    // Collect green letters
    for (let i = 0; i < 5; i++) {
        const gbox = document.getElementById(`gbox${i}`);
        const letter = gbox.value;
        if (letter) {
            greenletters.push([i, letter.toLowerCase()]);
        }
    }

    // Collect yellow letters
    const yellowRows = document.querySelectorAll(".yellow-letter-row");
    yellowRows.forEach((row, rowIndex) => {
        const yellowBoxes = row.querySelectorAll(".yellow-box");
        yellowBoxes.forEach((ybox, boxIndex) => {
            const letter = ybox.value;
            if (letter) {
                yellowletters.push([boxIndex, letter.toLowerCase()]);
            }
        });
    });

    console.log("Black Letters:", blackletters);
    console.log("Green Letters:", greenletters);
    console.log("Yellow Letters:", yellowletters);

    // Clear the wordList element
    const wordList = document.getElementById("wordList");
    wordList.innerHTML = ""; // Remove existing content

    solver(blackletters, greenletters, yellowletters);
});

function solver(blackletters, greentuple, yellowtuple){

//var blackletters = "iubgsh"; //etyuis
//var greentuple = [[2, 'a'], [3, 'd'], [4, 'e']];
//var yellowtuple = [[0, 'a'], [1, 'd'], [3, 'e'], [1, 'a'], [2, 'd']];

var greenletters = greentuple.map(tuple => tuple[1]).join('');
var yellowletters = yellowtuple.map(tuple => tuple[1]).join('');


function combineStringsWithoutRepeats(str1, str2) {
  const uniqueLetters = new Set(str1);
  let combinedStr = str1;
  for (const letter of str2) {
    if (!uniqueLetters.has(letter)) {
      combinedStr += letter;
      uniqueLetters.add(letter);
    }
  }
  return combinedStr;
}

const validletters = combineStringsWithoutRepeats(greenletters, yellowletters);

function checkGreenLetters(list_o_tuples, word) {
    if (list_o_tuples.length > 0) {
        var holder = [];
        for (var i = 0; i < list_o_tuples.length; i++) {
            var tuple = list_o_tuples[i];
            var green_index = tuple[0];
            var green_letter = tuple[1];
            for (var j = 0; j < word.length; j++) {
                var letter = word[j];
                if (j === green_index && letter === green_letter) {
                    holder.push(word);
                }
            }
        }
        if (holder.length === list_o_tuples.length) {
            return holder[0];
        }
    }
}

function checkYellowLetters(list_o_tuples, word) {
    var holder = [];
    for (var i = 0; i < list_o_tuples.length; i++) {
        var tuple = list_o_tuples[i];
        var yellow_index = tuple[0];
        var yellow_letter = tuple[1];
        for (var j = 0; j < word.length; j++) {
            var letter = word[j];
            if (j === yellow_index && letter !== yellow_letter) {
                holder.push(word);
            }
        }
    }
    if (holder.length === list_o_tuples.length) {
        return holder[0];
    }
}

function hasAll(chars, string) {
    var letter_array = [];
    for (var i = 0; i < chars.length; i++) {
        letter_array.push(chars[i]);
    }
    return letter_array.every(function(char) {
        return string.includes(char);
    });
}

function notAnyLetters(chars, string) {
  return !chars.split('').some(letter => string.includes(letter));
}

var alist = [];

for (const word of WORDS) {
  if (notAnyLetters(blackletters, word)) {
    if (greentuple.length !== 0) {
      if (checkGreenLetters(greentuple, word)) {
        if (hasAll(validletters, word)) {
        if (yellowtuple.length !== 0) {
          if (checkYellowLetters(yellowtuple, word)) {
            alist.push(word);
          }
        } else {
          alist.push(word);
          }
        }
      }
    }
    else {
      if (hasAll(validletters, word)) { // yellow letters
        if (yellowtuple.length !== 0) {
          if (checkYellowLetters(yellowtuple, word)) {
            alist.push(word);
          }
        } else {
          alist.push(word);
        }
      }
    }
  }
}


function getLetterFrequency(words, ignoreString) {
    const frequency = {};

    // Create a set of letters to be ignored
    const ignoreSet = new Set(ignoreString.toLowerCase());

    words.forEach(word => {
        // Create a set of unique letters from the word
        const uniqueLetters = new Set(word.toLowerCase());

        // Update the frequency count for each unique letter
        uniqueLetters.forEach(letter => {
            // Skip the letter if it's in the ignoreSet
            if (!ignoreSet.has(letter)) {
                if (frequency[letter]) {
                    frequency[letter]++;
                } else {
                    frequency[letter] = 1;
                }
            }
        });
    });
    return frequency;
}

function formatFrequency(frequency) {
    // Calculate the total number of counted letters
    const total = Object.values(frequency).reduce((sum, count) => sum + count, 0);

    // Convert frequency counts to percentage and create an array of letter-frequency pairs
    const frequencyArray = Object.entries(frequency).map(([letter, count]) => {
        return { letter, percentage: (count / total * 100).toFixed(2) };
    });

    // Sort the array by frequency percentage in descending order
    frequencyArray.sort((a, b) => b.percentage - a.percentage);

    // Convert array back to an object for easier lookups
    const frequencyObject = {};
    frequencyArray.forEach(({ letter, percentage }) => {
        frequencyObject[letter] = parseFloat(percentage);
    });

    return frequencyObject;
}

function calculateWordScore(word, letterFrequency) {
    let score = 0;
    const uniqueLetters = new Set(word.toLowerCase());

    uniqueLetters.forEach(letter => {
        if (letterFrequency[letter]) {
            score += letterFrequency[letter];
        }
    });

    return score;
}

function orderWordsByFrequency(words, letterFrequency) {
    return words.slice().sort((a, b) => calculateWordScore(b, letterFrequency) - calculateWordScore(a, letterFrequency));
}

const letterFrequency = getLetterFrequency(alist, validletters);
const formattedFrequency = formatFrequency(letterFrequency);

const orderedWords = orderWordsByFrequency(alist, formattedFrequency);

function displayAlist() {
    const listLength = document.getElementById("listLength");
    listLength.textContent = `Results: ${orderedWords.length}`;

    const wordList = document.getElementById("wordList");

    orderedWords.forEach(function(word) {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
    });
}

// Call the function to display the words
displayAlist();
}

