module.exports = class bookDao {
  constructor(db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve, reject) => {
      this._db.all(
        'SELECT * FROM book',
        (error, books) => {
          if (error) {
            return reject('Books could not be listed');
          }
          
          return resolve(books);
        }
      );
    });
  }

  add(book) {
    return new Promise((resolve, reject) => {
      this._db.run(`
        INSERT INTO book (
          title,
          price,
          description
        ) VALUES (?, ?, ?)
        `,[
          book.title,
          book.price,
          book.description
        ],
        (error) => {
          if (error) {
            return reject('Could not add book');
          }

          return resolve();
        }
      )
    });
  }
}
