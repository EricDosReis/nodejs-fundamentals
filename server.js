const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">

          <title>Books API</title>
        </head>

        <body>
          <h1>Books API</h1>
        </body>
      </html>
    `);
  }
});

server.listen('3000');
