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

class Candidates{
  constructor(){
    this.options = [];

    for (let i=0; i<=9999; i++){
      this.options.push(i);
    }
  }

  get best(){
    var i = Math.ceil(this.options.length/2); //Round up because we want the larger option, and they are in order
    return this.options[i];
  }

  match(number, rule){
    
  }
}

var game = new Candidates();

console.log(game.best)
