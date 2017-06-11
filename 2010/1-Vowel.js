var vowls = 'aeiou';

function Operation(string){
  var count = 0;

  for (let i=0; i<string.length; i++){
    if (vowls.indexOf(string[i].toLowerCase()) != -1){
      count += 1;
    }
  }

  return Math.floor(count / string.length * 100);
}

var input = `an
Hello
YACHT
yesterday`;
input = input.split('\n');

for (let item of input){
  console.log(Operation(item) + ' ' + item);
}
