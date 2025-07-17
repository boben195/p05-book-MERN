import mongoose from "mongoose";

const reservSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    date: { type: String, require: true },
    time: { type: String, require: true },
    guests: {type:String , require: true},
})

export default mongoose.model("Reserv", reservSchema)