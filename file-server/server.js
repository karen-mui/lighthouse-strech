const net = require("net");
const fs = require('fs');

const server = net.createServer();

server.listen(3000, () => {
  console.log("server listening on port 3000");
});

server.on("connection", (client) => {
  console.log("new client connected!");

  client.write("you are connected! what file would you like to read?");

  client.setEncoding("utf8");

  client.on("data", (data) => {
    const fileName = data.trim(); // Remove any extra whitespace or newline characters
    readFileAndSendToClient(fileName, (results) => {
      client.write(results)
    })
  }); 
});

const readFileAndSendToClient = function(data, callback) {
  fs.readFile(`./${data}.txt`, 'utf8', (error, data) => {
    if (error) {
      callback(error.message)
    } else {
      callback(data)
    }
  });
}