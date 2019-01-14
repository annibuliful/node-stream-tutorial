const { Transform } = require("stream");
const fs = require("fs");

const transformToUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    console.log(chunk.toString().toUpperCase());
    this.push(chunk.toString().toUpperCase());
  }
});

const readFileStream = fs.createReadStream("./a.txt", "utf8");
const writeFileStream = fs.createWriteStream("./upper.txt", "utf8");

readFileStream.pipe(transformToUpperCase).pipe(writeFileStream);
