const saveButton = document.querySelector('#save');
const API_URL = 'http://localhost:3000';
const RESOURCE = 'book';

const book = {
  id: document.querySelector('#id').value,
  title: document.querySelector('#title').value,
  price: document.querySelector('#price').value,
  description: document.querySelector('#description').value,
};

saveButton.addEventListener('click', (event) => {
  const target = event.target;

  if (!book.id === '') 
    update(book);
  else 
    save(book);
});

function update(book) {
  fetch(`${API_URL}/${RESOURCE}`, {
    method: 'PUT',
    body: JSON.stringify(book),
  })
  .then(() => {
    window.location.replace(`${API_URL}/${RESOURCE}`);
  });
};

function save(book) {
  fetch(`${API_URL}/${RESOURCE}`, {
    method: 'POST',
    body: JSON.stringify(book),
  })
  .then(() => {
    window.location.replace(`${API_URL}/${RESOURCE}`);
  });
};