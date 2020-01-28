const express = require('express');

const app = express();

app.get('/', (_, res) => res.send('Hello World!'));

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
