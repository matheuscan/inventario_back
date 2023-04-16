const express = require('express')
const app = express()
require('dotenv').config()
let port = process.env.PORT || 3000

app.use()

app.listen(port, () => {
    console.log(`Aplicacion funcionando sobre el puerto ${port}`)
})
