const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'))
app.get('/api', (req, res) => res.send('API Base URL'))

app.listen(port, ()=> console.log(`App is running on port ${port}!`))