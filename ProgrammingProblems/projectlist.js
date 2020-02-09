/*
var req = new XMLHttpRequest();
req.open('GET', 'https://github.com/Hazlenut?tab=repositories', false);
req.send(null);
if(req.status == 200)
   dump(req.responseText);
var githtml = req.responseText;
*/
problems = [];
/*
var as = githtml.getElementByTagName('a');
for(int i = 0; i < as.length; i++) {
  if(as[i].getAttribute('itemprop')) {
    titles.push(as[i].innerHTML);
  }
}
for(int i = 0; i < titles.length; i++) {
  console.log(titles[i]);
}

*/
console.log("starting");
function readTextFile(name) {
  console.log("reading");
  var file = new XMLHttpRequest();
  file.open("GET", name, true);
    console.log(file.readyState);
    file.send(null);
    file.onreadystatechange = function() {
    if(file.readyState === 4)
    {
        if(file.status === 200 || file.status == 0)
        {
            var txt = file.responseText;
            var lines = txt.split('\n');
            console.log("here");
            for(var i = 0; i < lines.length; i++) {
              problems.push(lines[i]);
            }
        }
    }

};
}
function listproblems() {
  readTextFile("proglist.txt");
  for(var i = 0; i < problems.length; i++) {
    console.log(problems[i]);
  }
}
console.log("s");
listproblems();
