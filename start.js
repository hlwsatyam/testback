const cors = require('cors')
const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.post("/table", (req, res) => {
    const { text } = req.body
    res.send("Upcomimg data is:", text)
    console.log("comming data is:", text)
})
let x = 0
app.get("/", (req, res) => {

    console.log(": data :")
    res.send(`Data came! ${x++}`)
})

app.listen(PORT, () => {
    console.log("server is running")
})