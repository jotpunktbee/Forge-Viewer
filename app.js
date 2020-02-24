const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World'))
app.listen(3000, () => console.log('Server Ready!'))