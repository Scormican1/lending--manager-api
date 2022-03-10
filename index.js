const express = require('express')
const cors = require('cors')
const { getList, newRecord } = require('./src/borrow')
// const req = require('express/lib/request')


const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Its working!')
})

app.get('/borrow', getList)
app.post('/borrow', newRecord)
// app.get('/users',getUsers)

app.listen(PORT,()  => {
    console.log (`Listening on port ${PORT}...`)
})
