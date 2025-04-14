import  express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from"./route/book.route.js"
import cors from "cors"
import userRoute from  "./route/user.route.js"
const app = express()
app.use (cors());
app.use(express.json());

dotenv.config();
const PORT=process.env.PORT||4000;
const URI=process.env.MONGODB_URI;
try {
mongoose.connect(URI);
console.log("mongodb connected successfully")
} catch (error) {
  console.log("Error",error);
  
}
app.use("/book",bookRoute)
app.use("/users",userRoute)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})