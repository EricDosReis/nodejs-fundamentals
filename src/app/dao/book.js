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
}
