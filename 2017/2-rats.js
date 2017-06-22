//Javascript
//{esversion: 6}


function RATS(num){
  var a = num;
  var b = Number(
    num.toString().split('').reverse().join('')
  );

  return Number(
    (a + b).toString().split('').sort().join('')
  );
}

function Operation(start){
  var tested = [start];

  var next = RATS(start);
  while (tested.indexOf(next) === -1){
    if (next >= 1e+12){
      return undefined;
    }

    tested.push(next);

    next = RATS(next);
  }

  return tested.splice(tested.indexOf(next));
}

var cycle = [];
var cycleId = [];
var cycleNum = [];
for (let i=0; i<10000; i++){
  var tested = Operation(i);

  if (tested !== undefined){
    var index = cycleId.indexOf(tested[0]);
    if (index === -1){
      cycleId[cycle.length] = tested[0];
      cycleNum[cycle.length] = 1;
      cycle.push(tested);
    }else{
      cycleNum[index] += 1;
    }
  }
}

for (let i=0; i<cycleId.length; i++){
  console.log(`Period ${cycle[i].length}, occurs ${cycleNum[i]} times, cycle: ${cycle[i].join(' ')}`);
}
