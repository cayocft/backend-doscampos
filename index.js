/** Declaraciones */
const express = require('express')
var cors = require('cors')
const app = express()
var router = express.Router();
require('dotenv').config();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
/** FIn declaraciones */

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/**Conexion DB */
mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado a la DB")
});
/**FIn Conexion DB */
/** RUtas Servicios*/
router.get('/', (req, res) => {
  res.send('Hello World!')
})

/** Fin Rutas Servicios*/

app.use('/backen-doscampos',router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})