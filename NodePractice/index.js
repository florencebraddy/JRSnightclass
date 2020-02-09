const ramda = require("ramda");
//const fs = require("fs");
const arith = require("./arithmetic.js");
console.log(ramda.add(3, 2));

//const file = fs.readFileSync("./text.js", { encoding: "utf-8" });

//fs.writeFileSync("./text.js", "write something else to the page");
//console.log(file);

x = 7;
y = 4;

console.log(arith.sub(x, y));

console.log(arith.multi(x, y));
console.log(arith.add(x, y));
console.log(arith.div(x, y));

console.log(arith.fact(x, y));
