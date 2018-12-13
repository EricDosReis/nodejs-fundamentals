const BookDao = require('../dao/book');
const db = require('../../config/database');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.redirect('/book');
  });

  app.get('/book', (req, res) => {
    const bookDao = new BookDao(db);

    bookDao
      .list()
      .then(books => {
        res.marko(
          require('../views/book/list'),
          { books },
        );
      })
      .catch(console.error);
  });

  app.get('/book/form', (req, res) => {
    res.marko(
      require('../views/book/form'),
      { 
        book: {},
        pageTitle: 'New Book',
      },
    );
  });

  app.get('/book/form/:id', (req, res) => {
    const bookDao = new BookDao(db);

    bookDao
      .getOne(req.params.id)
      .then(book => {
        res.marko(
          require('../views/book/form'),
          { 
            book,
            pageTitle: 'Edit Book',
          },
        );
      })
      .catch(console.error);
  });

  app.post('/book', (req, res) => {
    const bookDao = new BookDao(db);

    bookDao
      .add(req.body)
      .then(res.redirect('/book'))
      .catch(console.error);
  });

  app.put('/book', (req, res) => {
    const bookDao = new BookDao(db);

    bookDao
      .update(req.body)
      .then(res.redirect('/book'))
      .catch(console.error);
  });

  app.delete('/book/:id', (req, res) => {
    const bookDao = new BookDao(db);

    bookDao
      .delete(req.params.id)
      .then(() => res.status(200).end())
      .catch(console.error);
  });
};
