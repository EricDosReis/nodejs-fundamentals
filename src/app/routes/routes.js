module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>House of Code</title>
        </head>

        <body>
          <h1>House of Code</h1>
        </body>
      </html>
    `);
  });

  app.get('/books', (req, res) => {
    res.marko(
      require('../views/books/list'),
      {
        books: [
          {
            id: 1,
            title: 'NodeJS Fundamentals',
          },
          {
            id: 2,
            title: 'Advanced NodeJS',
          },
          {
            id: 3,
            title: 'Cangaceiro Javascript',
          },
        ]
      }
    );
  });
};

