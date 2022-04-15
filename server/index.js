const express = require('express')
const app = express();
const port = 3000;
const path = require('path')


app.use(express.static('./client/dist'))
app.use()

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})