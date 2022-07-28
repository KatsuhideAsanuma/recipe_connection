const port = 3000;
import http from "http";
import httpStatus from "http-status-codes";

const app = http.createServer((req, res) => {
  console.log("Received an incoming request!");
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  const responseMessage = "<h1>Hello,World!</h1>";
  res.write(responseMessage);
  res.end();
  console.log(`Sent a response :${responseMessage}`);
});
app.listen(port);
console.log(`The server has started and is listning on port number: ${port}`);
