const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf8" });
const part1 = require("./part1.js");
const part2 = require("./part2.js");
let arr = input
  .trim()
  .split("\n")
  .map(x => parseInt(x));

console.log(part1(arr));
console.log(part2(arr));
