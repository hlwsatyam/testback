const cors = require('cors')
const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.post("/table", (req, res) => {
    const { text } = req.body
    res.send("Data gone!")
    console.log("comming data is:", text)
})
app.get("/", (req, res) => {


    console.log(": data :")
    res.send("Data came!")
})

app.listen(PORT, () => {
    console.log("server is running")
})