const net = require("net");

const server = net.createServer();

server.listen(3000, () => {
  console.log("server listening on port 3000")
})

server.on("connection", (client) => {
  console.log("new client connected!")
  client.write("hello there!")

  client.setEncoding("utf8");
  client.on("data", (data) => {
  console.log("Message from client: ", data)
  })

})