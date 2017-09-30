var arr = [];

while (true) {
  var pr = parseInt(prompt('vvedi chislo'));

  if (pr === '' || !Number.isInteger(pr)) {
    break;
  }

  arr.push(pr);
}

alert(arr.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
}))