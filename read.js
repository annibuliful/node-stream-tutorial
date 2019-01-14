const fs = require("fs");

fs.readFile("./a.txt", "utf8", (err, data) => {
  console.log(data);
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(
      `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
    );
  }
});
