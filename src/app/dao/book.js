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
            console.error(error);
            return reject('Could not execute the book query');
          }
          
          return resolve(books);
        }
      );
    });
  }

  add({ title, price, description }) {
    return new Promise((resolve, reject) => {
      this._db.run(`
        INSERT INTO book (
          title,
          price,
          description
        ) VALUES (?, ?, ?)
        `, [
          title,
          price,
          description
        ],
        error => {
          if (error) {
            console.error(error);
            return reject('Could not add the book');
          }

          return resolve();
        }
      );
    });
  }

  update({ id, title, price, description }) {
    return new Promise((resolve, reject) => {
      this._db.run(`
        UPDATE book SET
          title = ?,
          price = ?,
          description = ?
        WHERE id = ?
        `, [
          title,
          price,
          description,
          id
        ],
        error => {
          if (error) {
            console.error(error);
            return reject('Could not update the book');
          }

          return resolve();
        }
      );
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      this._db.all(
        'SELECT * FROM book WHERE id = ?',
        id,
        (error, result) => {
          if (error) {
            console.error(error);
            return reject('Could not execute the book query');
          }

          return resolve(result[0]);
        }
      );
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this._db.run(`
        DELETE FROM book
        WHERE id = ?
      `,
        id
      ,
      error => {
        if (error) {
          console.error(error);
          return reject('Could not delete the book');
        }

        return resolve();
      });
    });
  }
}
