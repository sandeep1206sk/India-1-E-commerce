const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const morgan = require("morgan");
const  authRouter  = require("./routes/authRoute");
const  categoryRouter  = require("./routes/category");
const  productRouter  = require("./routes/productRoutes");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

mongoose.connect(process.env.DB_URL)
.then(()=>console.log("db Connected"))
.catch(err=>console.log("Error while connecting",err))
;
app.use('/api/auth',authRouter)
app.use('/api/category',categoryRouter)
app.use("/api/product",productRouter );

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server start on port ${PORT}`);
})