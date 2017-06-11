function StringToArr(string, type){
  var arr = [];
  for (let i=0; i<string.length; i++){
    if (string[i] == type){
      arr[i] = true;
    }else{
      arr[i] = null;
    }
  }

  return arr;
}
function ArrsToString(red, blue){
  var result = [[], []];
  var length = Math.min(red.length, blue.length);
  var center = Math.floor(length/2);

  for (let i=0; i<length; i++){
    if (red[i]){
      result[0][i] = 'R';
    }else{
      result[0][i] = '.';
    }

    if (blue[i]){
      result[1][i] = 'B';
    }else{
      result[1][i] = '.';
    }
  }

  if (result[0][center] == "R"){
    result[1][center] = "R";
  }
  if (result[1][center] == "B"){
    result[0][center] = "B";
  }

  result[0] = result[0].join('');
  result[1] = result[1].join('');

  return result;
}

function Operation(cycles, red, blue){
  red = StringToArr(red, 'R');
  blue = StringToArr(blue, 'B');

  var length = Math.min(red.length, blue.length);
  var center = Math.floor(length/2);

  var totalMovement = 0;
  var movement = 0;

  for (let c=0; c<cycles; c++){
    movement = 0;
    var hadFirstCar = false;

    //Calculate red
    hadFirstCar = false;
    for (let i=0; i<length; i++){
      if (i===0 && red[i]){
        hadFirstCar = true;
      }

      let ai = (i+1 >= length)? 0 : i+1;  //Aim index

      //If your are checking the intersection and there is a car already there
      if (ai == center && blue[ai]){
        continue;
      }

      //If the first slot was not blank at the beginning of the tick then no car can move there
      if (ai === 0 && hadFirstCar){
        continue;
      }

      //If the next position is not taken and the checking position has a car
      if (!red[ai] && red[i]){
        red[ai] = true;
        red[i] = null;
        i++; //Make sure that this car is not moved again
        movement += 1;
      }
    }

    //Calculate blue
    hadFirstCar = false;
    for (let i=0; i<length; i++){
      if (i===0 && blue[i]){
        hadFirstCar = true;
      }

      let ai = (i+1 >= length)? 0 : i+1;  //Aim index

      //If your are checking the intersection and there is a car already there
      if (ai == center && red[ai]){
        continue;
      }

      //If the first slot was not blank at the beginning of the tick then no car can move there
      if (ai === 0 && hadFirstCar){
        continue;
      }

      //If the next position is not taken and the checking position has a car
      if (!blue[ai] && blue[i]){
        blue[ai] = true;
        blue[i] = null;
        i++; //Make sure that this car is not moved again
        movement += 1;
      }
    }

    totalMovement += movement;
  }

  console.log(
    'Current velocity: '+
    (movement/length).toFixed(3)+
    ', average velocity = '+
    (totalMovement/(cycles*length)).toFixed(3)
  );
  console.log(ArrsToString(red, blue).join('\n'));
}


Operation(
  5,
  '.RRR..R',
  'B.BR..B'
);
