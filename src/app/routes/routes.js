module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>House of Code</title>
        </head>

        <body>
          <h1>House of Code API</h1>
        </body>
      </html>
    `);
  });
};

