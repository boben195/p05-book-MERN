import mongoose from "mongoose"

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("Connection WORK121212");
        
    })
    // await mongoose.connect(`${process.env.MONGODB_URI}/form`)
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/form`);
      } catch (error) {
        console.error("MongoDB failed to connect:", error);
        process.exit(1); 
}
}

export default connectDB