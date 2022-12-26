import http from "http";

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html> <body> <h1> hello </h1></body> </html> ");
});
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
