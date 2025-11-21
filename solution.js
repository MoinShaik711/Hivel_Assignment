const fs = require("fs");

const fileName = process.argv[2];
if (!fileName) {
    console.log("Please specify a JSON file: e.g. node solution.js test1.json");
    process.exit(1);
}

const rawData = fs.readFileSync(fileName);
const data = JSON.parse(rawData);

const n = data.keys.n;
const k = data.keys.k;

let roots = [];

for (let i = 1; i <= k; i++) {
    const entry = data[i.toString()];
    const base = parseInt(entry.base);
    const encodedValue = entry.value;
    const Y = parseInt(encodedValue, base);
    roots.push(Y);
}

let C = 1;
for (let r of roots) {
    C *= r;
}

console.log("Constant C =", C);
