const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('<form  method="post">\
  Nom: <input type="text" name="nom">\
  <input type="submit" value="Enviar">\
  </form>')
})

app.post("/", function(req, res) {
    var nom = req.body.nom
    res.send("Hello "+nom);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})