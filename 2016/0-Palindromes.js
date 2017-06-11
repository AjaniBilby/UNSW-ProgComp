//Lang: Javascript es6
//Time: 12min 50sec

function IsPallendrom(string){
  var temp = string.toLowerCase().match(/[a-z]/g).join('');

  var a = temp.substr(0, Math.floor(temp.length / 2));
  var b = temp.substr(Math.ceil(temp.length / 2), temp.length).split('').reverse().join('');

  return a === b;
}



//Setup
var input = (`rotor
gnu dung
O Geronimo, no major ego.
Ten animals we slam in a net.
Harpo: not on Oprah?`).split('\n');
var output = '';


//Execute for inputs
var first = true;
for (let item of input){
  if (!first){
    output += '\n';
  }else{
    first = false;
  }

  output += (IsPallendrom(item) ? "Yes": "No") + ' "'+ item +'"';
}
