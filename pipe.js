const fs = require("fs");
const readFileStream = fs.createReadStream("./a.txt", "utf8");
const writeFileStream = fs.createWriteStream("./w.txt", "utf8");

readFileStream.on("pipe", src => {
  console.log(src);
});

readFileStream.pipe(writeFileStream);
