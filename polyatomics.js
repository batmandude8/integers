const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio_no = document.getElementById("noAudio");
const audio_yes = document.getElementById("yesAudio");
var answer = 0;
var score = 0;

// name, formula, charge, html-charge
const polyatomics = [
    ['ammonium', 'NH<sub>4</sub>', '1+', '<sup>1+</sup>'],
    ['nitrite', 'NO<sub>2</sub>', '1-', '<sup>1-</sup>', '<sup>1-</sup>'],
    ['nitrate', 'NO<sub>3</sub>', '1-', '<sup>1-</sup>', '<sup>1-</sup>'],
    ['sulfite', 'SO<sub>3</sub>', '2-', '<sup>2-</sup>'],
    ['sulfate', 'SO<sub>4</sub>', '2-', '<sup>2-</sup>'],
    ['hydrogen sulfate', 'HSO<sub>4</sub>', '1-', '<sup>1-</sup>', '<sup>1-</sup>'],
    ['thiosulfate', 'S<sub>2</sub>O<sub>3</sub>', '2-', '<sup>2-</sup>'],
    ['oxalate', 'C<sub>2</sub>O<sub>4</sub>', '2-', '<sup>2-</sup>'],
    ['hydroxide', 'OH', '1-', '<sup>1-</sup>', '<sup>1-</sup>'],
    ['phosphite', 'PO<sub>3</sub>', '3-', '<sup>3-</sup>'],
    ['phosphate', 'PO<sub>4</sub>', '3-', '<sup>3-</sup>'],
    ['hydrogen phosphate', 'HPO<sub>4</sub>', '2-', '<sup>2-</sup>'],
    ['dihydrogen phosphate', 'H<sub>2</sub>PO', '1-', '<sup>1-</sup>', '<sup>1-</sup>'],
    ['perchlorate', 'ClO<sub>4</sub>', '1-', '<sup>1-</sup>', '<sup>1-</sup>'],
    ['chlorate', 'ClO<sub>3</sub>', '1-', '<sup>1-</sup>'],
    ['chlorite', 'ClO<sub>2</sub>', '1-', '<sup>1-</sup>'],
    ['hypochlorite', 'ClO', '1-', '<sup>1-</sup>'],
    ['bromate', 'BrO<sub>3</sub>', '1-', '<sup>1-</sup>'],
    ['iodate', 'IO<sub>3</sub>', '1-', '<sup>1-</sup>'],
    ['acetate', 'C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>', '1-', '<sup>1-</sup>'],
    ['carbonate', 'CO<sub>3</sub>', '2-', '<sup>2-</sup>', '<sup>2-</sup>'],
    ['hydrogen carbonate', 'HCO<sub>3</sub>', '1-', '<sup>1-</sup>'],
    ['chromate', 'CrO<sub>4</sub>', '2-', '<sup>2-</sup>'],
    ['dichromate', 'Cr<sub>2</sub>O<sub>7</sub>', '2-', '<sup>2-</sup>'],
    ['permanganate', 'MnO<sub>4</sub>', '1-', '<sup>1-</sup>'],
    ['peroxide', 'O<sub>2</sub>', '2-', '<sup>2-</sup>'],
    ['cyanide', 'CN', '1-', '<sup>1-</sup>'],
    ['cyanate', 'OCN', '1-', '<sup>1-</sup>'],
    ['thiocyanate', 'SCN', '1-', '<sup>1-</sup>'],
    ['copper(I)', 'Cu', '1+', '<sup>1+</sup>'],
    ['copper(II)', 'Cu', '2+', '<sup>2+</sup>'],
    ['iron(II)', 'Fe', '2+', '<sup>2+</sup>'],
    ['iron(III)', 'Fe', '3+', '<sup>3+</sup>'],
    ['lead(II)', 'Pb', '2+', '<sup>2+</sup>'],
    ['lead(IV)', 'Pb', '4+', '<sup>4+</sup>'],
    ['mercury(II)', 'Hg', '2+', '<sup>2+</sup>'],
    ['tin(II)', 'Sn', '2+', '<sup>2+</sup>']
];

function mathhh (){
    var poly0 = polyatomics[Math.floor(Math.random()*polyatomics.length)];

    var poly1 = polyatomics[Math.floor(Math.random()*polyatomics.length)];
    while (poly0 == poly1) {
        var poly1 = polyatomics[Math.floor(Math.random()*polyatomics.length)];
      };

    var poly2 = polyatomics[Math.floor(Math.random()*polyatomics.length)];
    while (poly0 == poly2 || poly1 == poly2) {
        var poly2 = polyatomics[Math.floor(Math.random()*polyatomics.length)];
      };

    document.getElementById("prompt").innerHTML = poly0[1] + poly0[3];
      

    var answer = poly0[0];
    var fakeanswer1 = poly1[0];
    var fakeanswer2 = poly2[0];




    return [poly0, answer, fakeanswer1, fakeanswer2]
    

};

function generate_equation(){

  var poly0 = polyatomics[Math.floor(Math.random()*polyatomics.length)];

  var poly1 = polyatomics[Math.floor(Math.random()*polyatomics.length)];
  while (poly0 == poly1) {
      var poly1 = polyatomics[Math.floor(Math.random()*polyatomics.length)];
    };

  var poly2 = polyatomics[Math.floor(Math.random()*polyatomics.length)];
  while (poly0 == poly2 || poly1 == poly2) {
      var poly2 = polyatomics[Math.floor(Math.random()*polyatomics.length)];
    };

  document.getElementById("prompt").innerHTML = poly0[1] + poly0[3];
  
  var answer = poly0[0];
  var choice1 = poly1[0];
  var choice2 = poly2[0];

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