const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/', { index: 'index.html' }));


app.listen(port, err => {
  if (err) throw err

  console.log(`Ready on http://localhost:${port}`)
})