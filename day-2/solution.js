const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf8" });
const part1 = require("./part1.js");
let arr = input.split("\n");

console.log(part1(arr));
