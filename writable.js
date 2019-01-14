const { Writable } = require("stream");

const writeStream = Writable({
  write(chunk, encoding, callback) {
    console.log("Chunk Data: ", chunk.toString());
    console.log("Encoding Type:", encoding);
  }
});

writeStream.write("Test Hello World");
