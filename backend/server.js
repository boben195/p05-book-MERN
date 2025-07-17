import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

const app = express()

const port = process.env.PORT || 4000
connectDB()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("ITS ALIFE!!!")
})

app.listen(port, () => console.log("conection is good" + port))