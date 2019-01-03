const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

const BOOK_SCHEMA = `
  CREATE TABLE IF NOT EXISTS book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price REAL NOT NULL,
    image TEXT,
    description TEXT DEFAULT ('') NOT NULL
  )
`;

const INSERT_BOOK_1 = `
  INSERT INTO book (
    title,
    price,
    image,
    description
  ) SELECT 'O retorno do Cangaceiro Javascript', 29.90, 'o-retorno-do-cangaceiro-javascript.jpg', 'De padrões a uma abordagem funcional.' WHERE NOT EXISTS (SELECT * FROM book WHERE title = 'O retorno do Cangaceiro Javascript');
`;

const INSERT_BOOK_2 = `
  INSERT INTO book (
    title,
    price,
    image,
    description
  ) SELECT 'Eloquent JavaScript', 89.00, 'eloquent-javascript.jpg', 'This is a book about JavaScript, programming, and the wonders of the digital.' WHERE NOT EXISTS (SELECT * FROM book WHERE title = 'Eloquent JavaScript');
`;

db.serialize(() => {
  db.run("PRAGMA foreign_keys=ON");
  db.run(BOOK_SCHEMA);
  db.run(INSERT_BOOK_1);
  db.run(INSERT_BOOK_2);
});

process.on('SIGINT', () =>
  db.close(() => {
    process.exit(0);
  })
);

module.exports = db;
