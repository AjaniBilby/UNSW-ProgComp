function Operation(url){
  while(url.indexOf('%') != -1){
    var index = url.indexOf('%');
    var code = parseInt(url.slice(index, index+3).slice(1), 16);

    var first = url.slice(0, index);
    var last = url.slice(index+3);

    var insert = String.fromCharCode(code);

    url = first + insert + last;


  }

  return url;
}

var input = (`Hello
http://%77%77%77%2E%6D%61%6C%77%61%72%65%52%75%73%2E%63%6F%6D/www.furrykittens.com
http://www.example.com.au/spaces%20%26%20funny%20%21%23%7c%20chars%20in%20name.pdf`).split('\n');
for (let item of input){
  console.log(Operation(item));
}
