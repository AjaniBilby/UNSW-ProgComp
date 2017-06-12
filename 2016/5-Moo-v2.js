//B: correct digit in the right place
//C: correct digit in the wrong place

function Matcher(gcode, scode){
  var b = "";
  var c = "";

  for (let k=0; k<=9; k++){
    var k8 = Math.pow(8, k); //8^k

    var tgc = Math.trunc(gcode / k8); //tructated gcode
    var tgs = Math.trunc(scode / k8);

    var p = tgc % 8;
    var q = tgs % 8;

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
    r = r + Math.pow(2, (3*d+2)) + k*Math.pow(8,d);
    k = k + 1;
  }

  return r;
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

    var checked = [];
    for (let i=0; i<this.number.length; i++){
      if (number[i] === this.number[i]){
        b =+ 1;
        continue;
      }

      for (let j=0; j<this.number.length; j++){
        if (checked[j]){
          continue;
        }

        if (this.number[j] === number[i]){
          checked[j] = true;
          c += 1;
          break; //found a place
        }
      }
    }

    return {b, c};
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
      var num = i.toString();
      while (num.length<4){ //Fix length
        num = '0'+num;
      }

      this.options.push(num);
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



var anwser = new Rule('9153', 'BBBB');

// var number = Encode('0431');
var game = new Candidates();

for (var i=0; i<1000; i++){
  var guessN = game.best;                        //Guess Number


  // var guessR = Matcher(number, Encode(guessN));  //Guess Result
  //CUSTOM
  var guessR = '';
  var r = anwser.match(guessN);
  for (let i=0; i<r.b; i++){
    guessR += 'B';
  }
  for (let i=0; i<r.c; i++){
    guessR += 'C';
  }

  if (guessR === "BBBB"){
    break;
  }
  game.constrain(new Rule(guessN, guessR));

  console.log(i, guessN, r, guessR, game.options.length);
}

console.log(i, guessN, r, guessR, game.options.length);
