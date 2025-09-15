const express= require('express')
const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Prod Environment!');
});

app.listen(PORT, () => {
  console.log(`Prod app listening on port ${PORT}`);
});
