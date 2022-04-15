const express = require('express')
const app = express();
const port = 3000;
const path = require('path')
const controller = require('./controller')

app.use(express.static('./client/dist'))
// app.use()
app.use(express.json());

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})

app.get('/getAll', controller.get)
app.put('/update', controller.change)
app.get('/load', controller.load)