const { Readable } = require("stream");

const arr = [];
const readStream = Readable({
  read(size) {
    console.log("Size:", size);
  }
});
readStream.on("data", data => {
  console.log(data.toString());
  arr.push(data.toString());
});

readStream.on("end", () => {
  console.log("Ending");
  console.log(arr);
});
readStream.push("Test Hello");
readStream.push("World 2");
readStream.push(null);
