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
    const blackletters = document.getElementById("bbox").value;
    const greenletters = [];
    const yellowletters = [];

    // Collect green letters
    for (let i = 0; i < 5; i++) {
        const gbox = document.getElementById(`gbox${i}`);
        const letter = gbox.value;
        if (letter) {
            greenletters.push([i, letter]);
        }
    }

    // Collect yellow letters
    const yellowRows = document.querySelectorAll(".yellow-letter-row");
    yellowRows.forEach((row, rowIndex) => {
        const yellowBoxes = row.querySelectorAll(".yellow-box");
        yellowBoxes.forEach((ybox, boxIndex) => {
            const letter = ybox.value;
            if (letter) {
                yellowletters.push([boxIndex, letter]);
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



function customSort(words, WORDS2) {
  // Create a map to store the priority for each word
  const wordPriority = new Map();
  for (const [word, priority] of WORDS2) {
    wordPriority.set(word, priority);
  }

  // Sort the words based on the custom priority
  return words.sort((a, b) => {
    const priorityA = wordPriority.get(a) || 1; // Default priority is 1
    const priorityB = wordPriority.get(b) || 1; // Default priority is 1

    // Sort in descending order of priority
    return priorityB - priorityA;
  });
}

var alist = customSort(alist, WORDS2);



// Function to display the contents of "alist"
function displayAlist() {
    const listLength = document.getElementById("listLength");
    listLength.textContent = `Results: ${alist.length}`;


    const wordList = document.getElementById("wordList");

//    alist.sort(function(a, b) {
//        return b[1] - a[1];
//    });

    alist.forEach(function(word) {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
    });
}

// Call the function to display the words
displayAlist();
}

