function fib() {
  const list = [0, 1];
  for (let i = 2; i < 100; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  return list;
}

console.log(fib());

function numToString(list) {
  return _.map(list, function (num) { return num.toString(); });
}

console.log(numToString(fib()));

function numEvenNums(list) {
  return _.size(_.filter(list, function (num) { return num % 2 === 0; }));
}

console.log(numEvenNums(fib()));
