//B: correct digit in the right place
//C: correct digit in the wrong place

function Matcher(gcode, scode){
  var b = "";
  var c = "";

  for (let k=0; k<=9; k++){
    var k8 = Math.pow(8, k); //8^k

    var p = Math.trunc(gcode / k8) % 8;
    var q = Math.trunc(scode / k8) % 8;

    var r = p-q;
    var s = 2*r + 3*q;

    if (s > 11 && s > (2*r)){
      if (s == (3*p)){
        b += "B";
      }else{
        c += "C";
      }
    }
  }

  return b + c;
}
function Encode(g){
  g = g.toString().split('');

  var k=0;
  var r=0;

  for (let c of g){
    c = parseInt(c);

    d = (3*c + 7) % 10;
    r = r + Math.pow(2, (3*d + 2)) + k*Math.pow(8,d);
    k = k + 1;
  }

  return r;
}

function Fix(number){
  number = number.toString();

  while (number.length < 4){
    number = '0'+number;
  }

  return number;
}

class Rule{
  constructor(number, statement){
    this.statement = statement;   //example: BBC
    this.number = number;         //example: 0431
    this.b = 0;
    this.c = 0;

    for (let i=0; i<this.statement.length; i++){
      if (this.statement[i] == "B"){
        this.b += 1;
      }else if (this.statement[i] == "C"){
        this.c += 1;
      }
    }
  }

  match(number){
    var b = 0;
    var c = 0;
    var s = '';

    //NOTE: MATCHING THE WRONG WAY
    var matchedKey = [];
    var matchedSearch = [];

    for (let i=0; i<number.length; i++){
      if (!matchedSearch[i] && !matchedKey[i] && number[i] === this.number[i]){
        matchedSearch[i] = true;
        matchedKey[i] = true;
        b += 1;
        s += 'B';
        continue;
      }
    }

    for (let j=0; j<this.number.length; j++){
      if (matchedKey[j]){
        continue;
      }

      for (let i=0; i<number.length; i++){
        if (matchedSearch[i]){
          continue;
        }

        if (number[i] === this.number[j]){
          matchedSearch[i] = true;
          matchedKey[j] = true;

          c += 1;
          s += "C";
          break;
        }
      }
    }

    while (s.length < 4){
      s += ' ';
    }

    return {b, c, s};
  }

  fits(number){
    var m = this.match(number);
    return m.b == this.b && m.c == this.c;
  }
}
class Candidates{
  constructor(){
    this.options = [];
    for (let i=0; i<=9999; i++){

      this.options.push(Fix(i));
    }
  }

  constrain(rule){
    for (let i=0; i<this.options.length; i++){
      if (rule.fits(this.options[i]) !== true){
        this.options.splice(i, 1);
        i -= 1;
      }
    }

    return this;
  }

  get best(){
    //Ceil because we want the larger option and they are in order smallest - largest
    return this.options[Math.ceil(this.options.length / 2)];
  }
}


// var answer = new Rule(Fix(Math.floor(Math.random() * 9999)), 'BBBB');
// console.log('\nAnwser:', answer.number);
var answer = Encode(83916806);

var game = new Candidates();

for (let i=0; i<1000; i++){
  var guessN = game.best;
  // var guessR = answer.match(guessN).s;
  var guessR = Matcher(answer, Encode(guessN));

  game.constrain(new Rule(guessN, guessR));

  console.log(`Guess ${i} ${guessN} gives ${guessR} Candidates remaining: ${game.options.length}`);

  if (game.options.length <= 1){
    break;
  }
}

console.log(`Solution: ${game.options[0]}`);
