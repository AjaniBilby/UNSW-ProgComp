Math.factorial = function(num){
  var working = 1;
  while(num > 1){
    working *= num;
    num -= 1;
  }

  return working;
};

function RemoveFromArray(array, items){
  for (let item of items){
    var index = array.indexOf(item);
    if (index != -1){
      array.splice(index, 1);
    }
  }
}

class Population{
  constructor(groups){
    this.groups = groups.sort(function(a,b){
      return b.length-a.length;
    });
  }
  other(exclusion){
    var out = this.all;
    for (let person of exclusion){
      var index = out.indexOf(person);
      if (index != -1){
        out.splice(index, 1);
      }
    }

    return out;
  }

  get all(){
    var out = [];
    for (let item of this.groups){
      for (let person of item){
        out.push(person);
      }
    }

    return out;
  }
}

function Kringle(pop){
  var received = [];
  var gifted = [];
}

var people = new Population([
  ['Amy', 'Chunjie', 'Eve', 'Gail'],
  ['Bruno'],
  ['Dave', 'Feng', 'Heild']
]);

console.log(people.groups);
console.log(people.other(people.groups[0]));
