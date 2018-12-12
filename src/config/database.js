const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

const USER_SCHEMA = `
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    fullname VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL
  )
`;

const INSERT_USER = `
  INSERT INTO user (
    fullname, 
    email,
    password
  ) SELECT 'Eric dos Reis', 'ericdosreis.personal@gmail.com', '123' WHERE NOT EXISTS (SELECT * FROM user WHERE email = 'ericdosreis.personal@gmail.com')
`;

const BOOK_SCHEMA = `
  CREATE TABLE IF NOT EXISTS book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL, 
    price REAL NOT NULL,
    description TEXT DEFAULT ('') NOT NULL
  )
`;

const INSERT_BOOK_1 = `
  INSERT INTO book (
    title,
    price,
    description
  ) SELECT 'NodeJS Fundamentals', 30.0, 'Expert techniques for building fast servers and scalable, real-time network applications with minimal effort.' WHERE NOT EXISTS (SELECT * FROM book WHERE title = 'NodeJS Fundamentals');
`;

const INSERT_BOOK_2 = `
  INSERT INTO book (
    title,
    price,
    description
  ) SELECT 'Eloquent JavaScript', 10.0, 'This is a book about JavaScript, programming, and the wonders of the digital.' WHERE NOT EXISTS (SELECT * FROM book WHERE title = 'Eloquent JavaScript')
`;

db.serialize(() => {
  db.run("PRAGMA foreign_keys=ON");
  db.run(USER_SCHEMA);
  db.run(INSERT_USER);
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
