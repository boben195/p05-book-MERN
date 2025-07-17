import Reserv from "../models/resrvation.js";


const createReservation = async (req, res) => {
   try {
       const { name, email, phone, date, time, guests } = req.body
       if (!name || !email || !phone || !date || !time || !guests) {
           return res.json({error: "All fiels are required"})
       }
       const newReservation = new Reserv({ name, email, phone, date, time, guests })
       await newReservation.save()

       res.json({message: "Reservation created successfully", reservation: newReservation})
   } catch (error) {
       res.json({error: "Error creating reservation"})
    
   }


}

const getAllReservation = async (req, res) => {
    try {
        const reservations = await Reserv.find()
       res.json(reservations) 
    } catch (error) {
        res.json({error: "Fetching error"})
    }
    
}

const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        await Reserv.findByIdAndDelete(id)
        res.json({success: true, message: "Reservation deleted"})
    } catch (error) {
        res.json({error: "Error delete"})
    }

}

export {createReservation, getAllReservation, deleteReservation}