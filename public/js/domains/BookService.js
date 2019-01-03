export class BookService {
  remove(bookId) {
    return fetch(`http://localhost:3000/book/${bookId}`, { method: 'DELETE' });
  }
}