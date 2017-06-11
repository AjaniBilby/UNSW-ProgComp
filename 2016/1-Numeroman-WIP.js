var Roman = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};
var subtractives = [1, 10, 100];

function Operation(string){
  if (string.length < 1){
    return 'Bad1';
  }

  var compressed = [];
  var checked = [];

  //Compress data
  for (let i=0; i<string.length; i++){
    //Is it a valid character?
    if (!Roman[string[i]]){
      return 'Bad1';
    }

    //Add items to compressed index
    if (compressed[compressed.length-1] && compressed[compressed.length-1].char == string[i]){
      compressed[compressed.length-1].count += 1;
      compressed[compressed.length-1].indexs.push(i);
    }else{
      compressed.push({
        char: string[i],
        count: 1,
        value: Roman[string[i]],
        subtractive: subtractives.indexOf(Roman[string[i]]) != -1,
        indexs: [i]
      });
    }
  }

  //Check for cancel errors (rule 3)
  checked = [];
  for (let item of compressed){
    if (checked.indexOf(item.char) != -1){
      return 'Bad3';
    }
    checked.push(item.char);
  }

  //Check that characters are ordered validly (rule 2)
  for (let i=1; i<compressed.length; i++){
    if (compressed[i].value > compressed[i-1].value && !compressed[i-1].subtractive){
      return 'Bad2';
    }
  }

  //Tally up
  var tally = 0;
  for (let i=0; i<compressed.length; i++){
    if (compressed[i+1] && compressed[i].value < compressed[i+1].value){
      tally -= compressed[i].value * compressed[i].count;
    }else{
      tally += compressed[i].value * compressed[i].count;
    }
  }

  return tally;
}


console.log('Result', Operation('CCXCVII'));
