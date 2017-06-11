function NextLexi(vals, loop){
  //STEP: 1
  var largestI = -1;
  for (var i=0; i<(vals.length-1); i++){
    if (vals[i] < vals[i+1]){
      largestI = i;
    }
  }

  //STEP: 2
  var largestJ = -1;
  for (let j=0; j<vals.length; j++){
    if (vals[largestI] < vals[j]){
      largestJ = j;
    }
  }

  if (loop && largestI === -1 || largestJ === -1){
    return vals.reverse();
  }

  //STEP: 3
  var temp = vals[largestI];
  vals[largestI] = vals[largestJ];
  vals[largestJ] = temp;

  //STEP: 4
  //NOTE: reverse from largestI + 1 to the end
  var endArray = vals.splice(largestI+1).reverse();
  vals = vals.concat(endArray);

  return vals;
}
