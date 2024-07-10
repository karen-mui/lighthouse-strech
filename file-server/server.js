const net = require("net");
const fs = require('fs');

const server = net.createServer();

server.listen(3000, () => {
  console.log("server listening on port 3000")
})

server.on("connection", (client) => {
  console.log("new client connected!")

  client.write("you are connected! what file would you like to read?")

  client.setEncoding("utf8");

  client.on("data", (data) => {
    const fileName = data.trim();
    fs.readFile(`./${fileName}.txt`, 'utf8', ((error, fileData) => {
      if (error) {
        console.log(error)
      } else {
        sendDataToClient(fileData)
      }
    }))
  })
})

const sendDataToClient = function(data) {
  console.log(data)
}