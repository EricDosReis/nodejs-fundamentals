const BookDao = require('../dao/book');
const db = require('../../config/database');

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

  app.get('/book', (req, res) => {
    const bookDao = new BookDao(db);

    bookDao
      .list()
      .then(books => {
        res.marko(
          require('../views/book/list'),
          { books }
        );
      })
      .catch(console.error); 
  });
};

