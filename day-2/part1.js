const checkSum = arr => {
  let twice = 0;
  let thrice = 0;
  let tally = {};
  arr.forEach((item, i) => {
    let currentBox = item.split("");
    let tally = {};
    for (let i of currentBox) {
      if (tally[i]) {
        tally[i]++;
      } else {
        tally[i] = 1;
      }
    }
    let tallies = new Set(Object.values(tally));
    if (tallies.has(2)) {
      twice++;
    }
    if (tallies.has(3)) {
      thrice++;
    }
  });
  return twice * thrice;
};

module.exports = checkSum;
