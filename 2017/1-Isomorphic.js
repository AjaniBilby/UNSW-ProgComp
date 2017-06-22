//Javascript
//{esversion: 6}

function Pattern(str){
  var matched = [];
  var res = {};
  var out = '';

  for (let i=0; i<str.length; i++){
    var letter = str[i];
    if (matched.indexOf(letter) != -1){
      continue;
    }

    matched.push(letter);

    var working = str.slice(str.indexOf(letter)+1);
    var occurance = [0];

    while (working.indexOf(letter) != -1){
      var index = working.indexOf(letter)+1;
      occurance.push(index);
      working = working.slice(index);
    }

    if (occurance.length > 1){
      res[letter] = occurance;
    }
  }

  for (let key in res){
    res[key].splice(0, 1);
  }

  for (let i=0; i<str.length; i++){
    var letter = str[i];
    if (res[letter]){
      if (res[letter][0] === undefined){
        out += ' 0';
        continue;
      }

      out += ' +' + res[letter][0];
      res[letter].splice(0,1);
    }else{
      out += ' 0';
    }
  }

  return out.slice(1);
}

function Operation(a, b){
  if (a.length != b.length){
    return null;
  }

  a = Pattern(a);
  b = Pattern(b);

  return a == b;
}

var input = (`all inn
doll door
level kayak
squeaky sunlamp
gutless sheriff
trapdoor flywheel
mistiest monsoons
throwaway hepatitis
explosive magnesium
wealthiest subterfuge
kookaburra toothbrush
sportswomen spokeswoman
tightfisted hitchhikers
cryptography manipulation
sharpshooter marshmallows
ambidextrous thunderclaps
incompatible housewarming
sportsmanlike environments
disfranchised stepdaughters
fastidiousness lasciviousness`).split('\n');

for (let item of input){
  item = item.split(' ');
  var a = item[0];
  var val = Operation(item[0], item[1]);
  item = item.join(' ');

  if (item === null){
    console.log(items, 'had different lengths');
  }

  if (val){
    console.log(item, 'are isomorps with repetition pattern', Pattern(a));
  }else{
    console.log(item, 'are not isomorps');
  }
}
