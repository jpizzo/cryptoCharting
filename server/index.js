const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

let app = express();
let port = 3000;

//app.use(bodyParser.json())
app.use('/', express.static(path.resolve(__dirname, '../public/')));

app.get('/btcdata', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(({data}) => {
    res.send(data)
  })
  .catch((error) => {
    console.log(error)
  })
})

app.listen(port, () => {
  console.log('listening on port:', port)
});
