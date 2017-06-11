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
  constructor(number, validity){
    this.number = number.toString();
    this.validity = validity; //E.g: BBC
    this.cp = 0; //Correct placements
    this.cn = 0; //Correct numbers

    for (let i=0; i<validity.length; i++){
      if (validity[i] == "B"){
        this.cp += 1;
      }else if (validity[i] == "C"){
        this.cn += 1;
      }
    }

    return this;
  }

  match(number){

    var a = this.number.split('');
    var b = number.toString().split('');

    var p = 0; //matching placements
    for (let i=0; i<4; i++){
      p += a[i] == b[i] ? 1 : 0;
    }

    var n=0; //Correct numbers incorrect placements
    var checked = [];
    for (let i=0; i<4; i++){
      var index = a.indexOf(b[i]);
      if (index == -1){
        a = a.reverse();
        index = a.indexOf(b[i]);
        a = a.reverse(); //reset
        if (index == -1){
          continue;
        }
        index = a.length - index;
      }

      if (checked[index] || index == i){
        continue;
      }

      if (a[index] && b[i]){
        checked[i] = true;
        n += 1;
      }
    }

    return {n: n, p: p};
  }
  meet(number){
    var m = this.match(number);
    return m.p == this.cp && m.n == this.cn;
  }
}
class Candidates{
  constructor(){
    this.options = [];
    this.rules = [];

    for (let i=0; i<=9999; i++){
      this.options.push(i);
  }

  meetsRules(number){
    for (let item of this.rules){
      if (!item.meet(number)){
        return false;
      }
    }
    return true;
  }
  applyRules(){
    for (let i=0; i<this.options.length; i++){
      if (!this.meetsRules(this.options[i])){
        this.options.splice(i, 1);
        i--;
      }
    }
  }

  guess(){
    return this.options[
      Math.ceil(this.options.length/2)
    ];
  }
}


var game = new Candidates();
console.log('left', game.options.length, 'guess', game.guess());
game.rules.push(new Rule('5012', 'BC'));
game.applyRules();
console.log('left', game.options.length, 'guess', game.guess());
game.rules.push(new Rule('5304', ''));
game.applyRules();
console.log('left', game.options.length, 'guess', game.guess());
game.rules.push(new Rule('6172', 'CCC'));
game.applyRules();
console.log('left', game.options.length, 'guess', game.guess());
game.rules.push(new Rule('2917', 'BBCC'));
game.applyRules();
console.log('left', game.options.length, 'guess', game.guess());
game.rules.push(new Rule('9217', 'BCCC'));
game.applyRules();
console.log('left', game.options.length, 'guess', game.guess());
