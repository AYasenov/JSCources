function sum(a) {
  return function(b) {
    return a + b;
  }
}


console.log(sum(3)(2));

var tempFunction = sum(2);
console.log("2+3", tempFunction(3));
console.log("2+5", tempFunction(5));
console.log("2+8", tempFunction(8));


for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button')
  btn.appendChild(document.createTextNode('Button ' + i));

  (function (i) {
    btn.addEventListener('click', function () { console.log(i) })
  })(i)

  document.body.appendChild(btn)
}
