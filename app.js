const cors = require("cors")
const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")

const app = express()
const PORT = process.env.PORT || 3001

app.use('/healtcheck', require('./routes/healthcheck.routes'))
app.use(express.urlencoded({ extended: true}));
app.use(cors())

app.get("/healthcheck", (req, res)=>{
headers={"http_status":200, "cache-control": "no-cache"}
body=
[
    {
        "name": "AIK",
        "points":9
    },
    {
        "name":"DIF",
        "points":6
    },
    {
        "name":"BK",
        "points":3
    },
    {
        "name":"IF",
        "points":1
    }
]
res.set('Content-Type', 'application/json')
    res.status(200).send(body)
})

app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
})