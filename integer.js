const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio_no = document.getElementById("noAudio");
const audio_yes = document.getElementById("yesAudio");
var answer = 0;
var score = 0;

function generate_equation(){
    var upperLimit = 50;

    var num1 = [Math.floor(Math.random()*upperLimit), -Math.floor(Math.random()*upperLimit)];
    var num2 = [Math.floor(Math.random()*upperLimit), -Math.floor(Math.random()*upperLimit)];
    var choice1 = Math.floor(Math.random()*num1.length);
    num1 = num1[choice1];
    var choice2 = Math.floor(Math.random()*num2.length);
    num2 = num2[choice2];


    var operations = ['+', '-']

    chosenOperation = operations[Math.floor(Math.random()*operations.length)];
    document.getElementById("sss").innerHTML = chosenOperation;

    if(chosenOperation == operations[0]){
        answer = num1 + num2;
    }
    else{
        answer = num1 - num2;
    }

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    

};

option1.addEventListener("click", function(){
    if(answer<0){
        audio_yes.play();
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
        if(answer<0){
            audio_yes.play();
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
    if(answer==0){
        audio_yes.play();
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
        if(answer==0){
            audio_yes.play();
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


option3.addEventListener("click", function(){
    if(answer>0){
        audio_yes.play();
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
    if (event.code == 'Digit3') {
        if(answer>0){
            audio_yes.play();
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

generate_equation();