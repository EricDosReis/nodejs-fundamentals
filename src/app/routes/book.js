const BookController = require('../controllers/book');
const bookController = new BookController();
const storage = require('../utils/storage');

const imageUpload = storage.create('public/images/books/');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.redirect('/book');
  });

  app.get('/book', (req, res) => {
    bookController.getAll(req, res);
  });

  app.get('/book/form', (req, res) => {
    bookController.goToNew(req, res);
  });

  app.get('/book/form/:id', (req, res) => {
    bookController.getOne(req, res);
  });

  app.post('/book', imageUpload.single('cover'), (req, res) => {
    bookController.add(req, res);
  });

  app.put('/book', imageUpload.single('cover'), (req, res) => {
    bookController.update(req, res);
  });

  app.delete('/book/:id', (req, res) => {
    bookController.delete(req, res);
  });
};
