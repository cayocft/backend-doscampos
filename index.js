const express = require('express')
var cors = require('cors')
const app = express()
var router = express.Router();

const port = 3000

app.use(cors())

router.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/backen-doscampos',router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})