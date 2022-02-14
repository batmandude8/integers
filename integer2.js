const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio_no = document.getElementById("noAudio");
const audio_yes = document.getElementById("yesAudio");
var answer = 0;

function generate_equation(){
    //generates random integers
    var upperLimit = 50;
    var num1 = [Math.floor(Math.random()*upperLimit), -Math.floor(Math.random()*upperLimit)];
    var num2 = [Math.floor(Math.random()*upperLimit), -Math.floor(Math.random()*upperLimit)];

    //chooses positive or negative
    var choice1 = Math.floor(Math.random()*num1.length);
    num1 = num1[choice1];
    var choice2 = Math.floor(Math.random()*num2.length);
    num2 = num2[choice2];

    //chosses multiply or divide
    var operations = ['x', '÷'];
    chosenOperation = operations[Math.floor(Math.random()*operations.length)];
    document.getElementById("sss").innerHTML = chosenOperation;

    if(chosenOperation == operations[0]){
        answer = num1 * num2;
    }
    else{
        answer = num1 / num2;
        while(Number.isInteger(answer)==false){
            num1 = [Math.floor(Math.random()*upperLimit), -Math.floor(Math.random()*upperLimit)];
            choice1 = Math.floor(Math.random()*num1.length);
            num1 = num1[choice1];
            answer = num1 /num2;
        }
    }

    

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
};

option1.addEventListener("click", function(){
    if(answer<0){
        audio_yes.play();
        generate_equation();
    }
    else{
        audio_no.play();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit1') {
        if(answer<0){
            audio_yes.play();
            generate_equation();
        }
        else{
            audio_no.play();
        }
      }
});


option2.addEventListener("click", function(){
    if(answer==0){
        audio_yes.play();
        generate_equation();
    }
    else{
        audio_no.play();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit2') {
        if(answer==0){
            audio_yes.play();
            generate_equation();
        }
        else{
            audio_no.play();
        }
      }
});


option3.addEventListener("click", function(){
    if(answer>0){
        audio_yes.play();
        generate_equation();
    }
    else{
        audio_no.play();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit3') {
        if(answer>0){
            audio_yes.play();
            generate_equation();
        }
        else{
            audio_no.play();
        }
      }
});

generate_equation();