const connect = require("./client")
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  // stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume()
  stdin.on("data", handleUserInput)
  return stdin;
}

const handleUserInput = function (key) {
  connection.write(key)
};

connection = connect()
setupInput(connection)