import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express()

const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("ITS ALIFE!!!")
})

app.listen(port, () => console.log("conection is good" + port))