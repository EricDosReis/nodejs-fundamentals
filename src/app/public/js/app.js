const booksTable = document.querySelector('#books');

booksTable.addEventListener('click', (event) => {
  const target = event.target;

  if (target.dataset.action === 'remove') {
    const bookId = target.dataset.ref;

    fetch(`http://localhost:3000/book/${bookId}`, { method: 'DELETE' })
      .then(res => {
        const tr = target.closest(`#book-${bookId}`)
        
        tr.remove();
      })
      .catch(console.error);
  }
})