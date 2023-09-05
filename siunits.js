const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio_no = document.getElementById("noAudio");
const audio_yes = document.getElementById("yesAudio");
var answer = 0;
var score = 0;

const prefixes = [
    ['G', 1e9],
    ['M', 1e6],
    ['k', 1e3],
    ['c', 1e-2],
    ['m', 1e-3],
    ['μ', 1e-6],
    ['n', 1e-9],
  ];

const units = ['s', 'm', 'g', 'l', 'Hz', 'Pa', 'J', 'V', 'W']

function mathhh (){
    var upperLimit = 100;
    var num1 = Math.floor(Math.random()*upperLimit);
    var item1 = prefixes[Math.floor(Math.random()*prefixes.length)];
    var item2 = prefixes[Math.floor(Math.random()*prefixes.length)];
    
    while (item2 == item1) {
        var item2 = prefixes[Math.floor(Math.random()*prefixes.length)];
      };
    
      

    var answer = num1*item1[1]/item2[1];
    var fakeanswers = [answer*10, answer/10, answer*100, answer/100, answer*1000, answer/1000, ]
    var fakeanswer = fakeanswers[Math.floor(Math.random()*fakeanswers.length)];

    answer = answer.toPrecision(2)
    answer = answer.replace(/e\+?/, ' x 10^');
    fakeanswer = fakeanswer.toPrecision(2)
    fakeanswer = fakeanswer.replace(/e\+?/, ' x 10^');

    var unit = units[Math.floor(Math.random()*units.length)];

    var answerchoice = [answer, fakeanswer]
    var num2 = answerchoice[Math.floor(Math.random()*answerchoice.length)];

    if (num2 == answer){
        return [true, unit, num1, item1, item2, num2];
        
    };
    if (num2 == fakeanswer){
        return [false, unit, num1, item1, item2, num2];
    };
};

var arrr = mathhh()
function generate_equation(){
    
    var unit = arrr[1]
    var num1 = arrr[2]
    var item1 = arrr[3]
    var item2 = arrr[4]
    var num2 = arrr[5]


    document.getElementById("unita").innerHTML = unit;
    document.getElementById("unitb").innerHTML = unit;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("unit1").innerHTML = item1[0];
    document.getElementById("unit2").innerHTML = item2[0];
    document.getElementById("num2").innerHTML = num2;

};









// function generate_equation(){
//     var upperLimit = 50;

//     var num1 = [Math.floor(Math.random()*upperLimit), -Math.floor(Math.random()*upperLimit)];
//     var num2 = [Math.floor(Math.random()*upperLimit), -Math.floor(Math.random()*upperLimit)];
//     var choice1 = Math.floor(Math.random()*num1.length);
//     num1 = num1[choice1];
//     var choice2 = Math.floor(Math.random()*num2.length);
//     num2 = num2[choice2];


//     var operations = ['+', '-']

//     chosenOperation = operations[Math.floor(Math.random()*operations.length)];
//     document.getElementById("sss").innerHTML = chosenOperation;

//     if(chosenOperation == operations[0]){
//         answer = num1 + num2;
//     }
//     else{
//         answer = num1 - num2;
//     }

//     document.getElementById("num1").innerHTML = num1;
//     document.getElementById("num2").innerHTML = num2;
    

// };
console.log('outside', generate_equation());
option1.addEventListener("click", function(){
    if(arrr[0] == true){
        audio_yes.play();
        arrr = mathhh();
        generate_equation();
        score+=10;
        document.getElementById("score").innerHTML = score;
    }
    else{
        audio_no.play();
        score-=10;
        document.getElementById("score").innerHTML = score;
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit1') {
        if(arrr[0] == true){
            audio_yes.play();
            arrr = mathhh();
            generate_equation();
            score+=10;
            document.getElementById("score").innerHTML = score;
        }
        else{
            audio_no.play();
            score-=10;
            document.getElementById("score").innerHTML = score;
        }
      }
});


option2.addEventListener("click", function(){
    if(arrr[0] == false){
        audio_yes.play();
        arrr = mathhh();
        generate_equation();
        score+=10;
        document.getElementById("score").innerHTML = score;
    }
    else{
        audio_no.play();
        score-=10;
        document.getElementById("score").innerHTML = score;
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit2') {
        if(arrr[0] == false){
            audio_yes.play();
            arrr = mathhh();
            generate_equation();
            score+=10;
            document.getElementById("score").innerHTML = score;
        }
        else{
            audio_no.play();
            score-=10;
            document.getElementById("score").innerHTML = score;
        }
      }
});


// option3.addEventListener("click", function(){
//     if(answer>0){
//         audio_yes.play();
//         generate_equation();
//         score+=10;
//         document.getElementById("score").innerHTML = score;
//     }
//     else{
//         audio_no.play();
//         score-=10;
//         document.getElementById("score").innerHTML = score;
//     }
// });
// document.addEventListener('keydown', function (event) {
//     if (event.code == 'Digit3') {
//         if(answer>0){
//             audio_yes.play();
//             generate_equation();
//             score+=10;
//             document.getElementById("score").innerHTML = score;
//         }
//         else{
//             audio_no.play();
//             score-=10;
//             document.getElementById("score").innerHTML = score;
//         }
//       }
// });
var arrr = mathhh();
generate_equation();