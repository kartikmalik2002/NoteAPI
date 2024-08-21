const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use("/users" , userRouter);
app.use("/note" , noteRouter);

app.get("/",(req , res)=>{
    res.send("NOTES API");
})



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT , ()=>{
        console.log("Server started on port number "+PORT);
    });
}
)
.catch((error)=>{
    console.log(error);
})

