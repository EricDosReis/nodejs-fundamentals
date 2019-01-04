const BookDao = require('../dao/book');
const db = require('../../config/database');

module.exports = class BookController {
  constructor() {
    this._bookDao = new BookDao(db);
  }

  add(req, res) {
    const book = {
      ...req.body,
      image: this._handleImage(req.file, ''),
    };

    this._bookDao
      .add(book)
      .then(res.redirect('/book'))
      .catch(console.error);
  }

  update(req, res) {
    const { image } = req.body;
    const book = {
      ...req.body,
      image: this._handleImage(req.file, image),
    };

    this._bookDao
      .update(book)
      .then(res.redirect('/book'))
      .catch(console.error);
  }

  getAll(req, res) {
    this._bookDao
      .getAll()
      .then(books => {
        res.marko(
          require('../views/book/list'),
          { books },
        );
      })
      .catch(console.error);
  }

  getOne(req, res) {
    this._bookDao
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
  }

  // TODO: implements file remove
  delete(req, res) {
    this._bookDao
      .delete(req.params.id)
      .then(() => res.status(200).end())
      .catch(console.error);
  }

  goToNew(req, res) {
    res.marko(
      require('../views/book/form'),
      {
        book: {},
        pageTitle: 'New Book',
      },
    );
  }

  _handleImage(uploadedImage, storedImage) {
    if (uploadedImage) return uploadedImage.originalname;
    if (storedImage) return storedImage;
    else return '';
  }
}
