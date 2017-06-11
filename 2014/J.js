function Operation(array){
  var isDown = true;
  var runs = 0;

  for (let i=1; i<array.length; i++){
    if (isDown){
      if (array[i-1] > array[i]){
        // console.log('Switch', array[i-1], array[i], isDown);
        isDown = false;
        runs++;
        i++;
      }
    }else{
      if (array[i-1] < array[i]){
        isDown = true;
        runs++;
        i++;
      }
    }
  }

  if (runs === 0){
    runs++;
  }

  return runs;
}

var input = (`23 89
5 4 3 -2 2 17 123
1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1
123 -123
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 1 2 3 4 5 6 7 8 9 10`);
input = input.split('\n');

for (let item of input){
  var parse = item.split(' ');
  for (let i=0; i<parse.length; i++){
    parse[i] = parseInt(parse[i]);
  }

  console.log(Operation(parse));
}
