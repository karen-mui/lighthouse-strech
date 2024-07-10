const net = require("net");

// establish connection
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  })

  conn.setEncoding("utf8")

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Hello from client!")
  })

  return conn;
}

console.log("Connecting...")

module.exports = connect;

