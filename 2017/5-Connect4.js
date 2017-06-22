class Game{
  constructor(str){
    this.slot = [];
    this.points = [0, 0];
    this.size = [0,0];

    str = str.split('\n');
    for (let x=0; x<str.length; x++){
      this.slot[x] = [];
      str[x] = str[x].split('');

      for (let y=0; y<str[x].length; y++){
        switch (str[x][y]){
          case 'R':
            this.slot[x][y] = 1;
            break;
          case 'Y':
            this.slot[x][y] = 2;
            break;
          case '.':
            this.slot[x][y] = 0;
        }

        if (y > this.size[1]){
          this.size[1] = y;
        }
      }

      if (x > this.size[0]){
        this.size[0] = x;
      }
    }
  }

  adjacentPoint(x,y){
    var result = [];

    var player = this.slot[x][y];

    var overRight = x+1 > this.slot.length;
    var overDown = y+1 > this.slot[x].length;
    var overTop = y-1 < 0;

    if (!overTop && !overRight && this.slot[x+1][y-1] == player){ //Up right
      // result.push([x+1, y-1]);
      result[0] = true;
    }
    if (!overRight && this.slot[x+1][y] == player){   // Right
      // result.push([x+1, y]);
      result[1] = true;
    }
    if (!overRight && !overDown && this.slot[x+1][y+1] == player){ //Right Down
      // result.push([x+1, y+1]);
      result[2] = true;
    }
    if (!overDown && this.slot[x][y+1] == player){ //Down
      // result.push([x, y+1]);
      result[3] = true;
    }

    return result;
  }

  line(x, y){
    var opts = this.adjacentPoint(x, y);
    var player = this.slot[x][y];
    var res = {
      ur: 0,
    };

    //Up Right
    var l = 1;
    var cordX = x;
    var cordY = y;
    while (opts[0]){
      if (this.slot[cordX+1] && this.slot[cordX+1][cordY+1] == player){
        l ++;
        cordX ++;
        cordY ++;
      }
    }
    res.ur = l;

    return res;
  }
}


var game = new Game(
  `RR....
......
YRRYR.
YYR...
RYYR..
RYY...
Y.....`
);

console.log(game.slot);
console.log(game.line(2, 1));
