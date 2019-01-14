const fs = require("fs");

const readFile = fs.createReadStream("./a.txt", "utf-8");
let count = 0;
readFile.on("data", chunk => {
  console.log("Chunk: ", chunk, "Count: ", count);
  count++;
});

readFile.on("end", () => {
  console.log(count);
  // const used = process.memoryUsage();
  // for (let key in used) {
  //   console.log(
  //     `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
  //   );
  // }
});
