//Lang: Javascript ES 6
//20mins

function HTime(time){
  var h = parseInt(time.substr(0, 2));
  var m = parseInt(time.substr(2, 4));

  var sm = '';
  var sh = '';

  //Hours
  h = parseInt(h);
  pm = h >= 12;
  if (pm){
    h -= 11;
  }
  if (h === 0 && pm){
    sh = '12 midnight';
  }else if (h === 12){
    if (pm){
      sh = '11pm';
    }else{
      sh = '12 noon';
    }
  }else{
    sh = h + (pm ? 'pm': 'am');
  }

  //Minutes
  var past = m <= 30;
  if (!past){
    m = 60 - m;
  }
  //Shorten
  switch (m) {
    case 30:
      m = 'half';
      break;
    case 15:
      m = 'quarter';
      break;
    case 1:
      m = 'a minute';
      break;
    default:
      m += ' minutes';
  }
  if (past){
    sm = m + ' past';
  }else{
    sm = m + ' to';
  }

  if (m === '0 minutes'){
    return sh;
  }

  return sm + ' ' + sh;
}


var input = (`0017
0400
0915
1155
1230
1445
2301`).split('\n');

for (let item of input){
  console.log(item + ' is ' + HTime(item));
}
