const express = require('express')

const app = express()

const port =  8080

app.get('/', (req,res) => res.send('Hello, Metrocom Djenggot'))

app.listen(port, () => console.log(`Listen on port ${port}`))
