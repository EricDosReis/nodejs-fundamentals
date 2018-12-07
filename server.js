const app = require('./src/config/wrapped-express');

app.listen(3000, () => {
  console.log(`Server is running on: 3000`);
});
