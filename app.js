const cors = require("cors")
const express = require("express")

const app = express()
const PORt = process.env.PORt || 3000

app.use('/healthcheck', require('./routes/healthchec.routes'));
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get("/", (req ,res)=>{
    headers = {"https_status":200, "cache-control": "no-cache"}
    body={"staatus": "available"}
    res.status(200).send(body)
})

app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
});