const cors = require('cors')
const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8000
// app.use(cors())

app.get("/table", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send("Hey Dear!")
})

app.listen(PORT, () => {
    console.log("server is running")
})