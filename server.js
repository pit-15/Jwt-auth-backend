require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');  
const authroutes = require('./routes/auth'); 
const path = require('path');
const useroutes = require('./routes/users')
const app = express();

app.use(express.urlencoded({extended:true}));
connectDB()


app.use(express.json()) 


//Routes
app.use("/",authroutes);
app.use("/api/users",useroutes);


const PORT=process.env.PORT || 5000
app.listen(PORT,()=>
{
    console.log(`Server running on Port ${PORT}`);
})

