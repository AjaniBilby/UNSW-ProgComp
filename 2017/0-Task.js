//Javascript
//Node v7.10.0
//{esversion: 6}

function Operation(k, x=1){
  result = x - ((Math.pow(x,2) - k) / (2*x));

  if (Math.abs(x - result) <= 1e-10){
    return result;
  }else{
    return Operation(k, result);
  }
}

console.log(Operation(2));
console.log(Operation(9.8696044010893586188344909998762));
console.log(Operation(1000000));
