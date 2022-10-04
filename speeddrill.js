const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio_no = document.getElementById("noAudio");
const audio_yes = document.getElementById("yesAudio");
var answer = 0;
var score = 0;

function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function generate_equation(){
    
    var minimum = 1;
    var maximum = 10;

    var num1 = randomNumber(minimum, maximum);
    var num2 = randomNumber(minimum, maximum);
    answer = num1 * num2;

    var choice1 = randomNumber(minimum, maximum);
    var choice2 = randomNumber(minimum, maximum);

    choice1 = num1 * choice1
    choice2 = num2 * choice2
    
    while(choice1 == choice2 || choice1 == answer){
        var choice1 = randomNumber(minimum, maximum);
    }
    while(choice1 == choice2 || choice2 == answer){
        var choice2 = randomNumber(minimum, maximum);
    }




    document.getElementById("sss").innerHTML = 'x';   

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    var choice_array = [answer, choice1, choice2];
    var shuffled = choice_array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    document.getElementById("option1").innerHTML = shuffled[0];
    document.getElementById("option2").innerHTML = shuffled[1];
    document.getElementById("option3").innerHTML = shuffled[2];
    var a = answer
    var b = shuffled
    return [a, b]

};

option1.addEventListener("click", function(){
    if(b[0]==a){
        audio_yes.play();
        return_array = generate_equation();
        a = return_array[0]
        b = return_array[1]
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
        if(b[0]==a){
            audio_yes.play();
            return_array = generate_equation();
            a = return_array[0]
            b = return_array[1]
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
    if(b[1]==a){
        audio_yes.play();
        return_array = generate_equation();
        a = return_array[0]
        b = return_array[1]
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
        if(b[1]==a){
            audio_yes.play();
            return_array = generate_equation();
            a = return_array[0]
            b = return_array[1]
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
    if(b[2]==a){
        audio_yes.play();
        return_array = generate_equation();
        a = return_array[0]
        b = return_array[1]
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
        if(b[2]==a){
            audio_yes.play();
            return_array = generate_equation();
            a = return_array[0]
            b = return_array[1]
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







return_array = generate_equation();
a = return_array[0]
b = return_array[1]

console.log(a, b)