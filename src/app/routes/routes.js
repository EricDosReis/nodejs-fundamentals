const multer = require('multer');
const fs = require('fs');

// TODO: create book controller

// TODO: move to a external file
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/images/books/');
  },

  filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

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

  app.post('/book', upload.single('cover'), (req, res) => {
    const bookDao = new BookDao(db);
    const book = req.body;

    book.image = req.file.originalname;

    bookDao
      .add(book)
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

  // TODO: implements file remove
  app.delete('/book/:id', (req, res) => {
    const bookDao = new BookDao(db);

    bookDao
      .delete(req.params.id)
      .then(() => res.status(200).end())
      .catch(console.error);
  });
};
