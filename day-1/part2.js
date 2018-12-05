const sumB = arr => {
  let sum = 0;
  let set = new Set([0]);
  let length = arr.length;
  for (let x = 0; ; x = (x + 1) % length) {
    sum += arr[x];
    if (set.has(sum)) {
      console.log(sum);
      break;
    } else {
      set.add(sum);
    }
  }
};

module.exports = sumB;
