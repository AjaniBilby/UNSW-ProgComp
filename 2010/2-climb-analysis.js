function Operation(points){
  var elevation = 0;
  var distance = 0;

  var lastEl = points[0][1];
  var lastDist = points[0][0];
  var climbed = 0;
  var strain = 0;

  for (let i=1; i<points.length; i++){
    var changeEl = points[i][1] - lastEl;
    lastEl = points[i][1];

    var changedDist = (points[i][0] - lastDist) * 1000;
    lastDist = points[i][0];

    if (changeEl < 0){
      continue;
    }

    var gradient = changeEl / changedDist;
    if (gradient >= 0.1){
      strain += changeEl;
    }

    climbed += changeEl;

    console.log(points[i][0] * 1000, changeEl, changedDist.toFixed(3), gradient.toFixed(3));
  }

  console.log('climbed', climbed, 'strain', strain);
}

console.log('points[0] changeEl changedDist\n');

var input = `0.0   500
0.15  510
0.20  520
0.30  470
0.55  540
0.65  540
0.85  550
1.00  535`;
input = input.split('\n');
for (let i=0; i<input.length; i++){
  input[i] = input[i].split('  ');
}

Operation(input);
