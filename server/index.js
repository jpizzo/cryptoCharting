const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();
let port = 3001;

app.use(bodyParser.json())
app.use('/', express.static(path.resolve(__dirname, '../public/')));

app.listen(port, () => {
  console.log('listening on port:', port)
});
