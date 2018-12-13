import { BookService } from './BookService.js';

export class BookController {
  constructor(table) {
    this._service = new BookService();
    this._setTableListeners(table);
  }

  _setTableListeners(table) {
    if (table) {
      table.addEventListener('click', (event) => {
        const target = event.target;
        const bookId = target.dataset.id;

        if (target.dataset.action === 'remove') {
          this._service
            .remove(bookId)
            .then(() => target.closest(`#book-${bookId}`).remove())
            .catch(console.error);
        }
      });
    }
  }
}
 