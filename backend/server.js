import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoute from './routes/auth.route.js'
import router from './routes/message.routes.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000

app.use(express.json())  //to get json
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/messages",router)

app.get("/",(req,res)=>{
    res.send("Hello World!!")
})


app.listen(PORT, ()=>{ 
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

    console.log(`Server Running on ${PORT}`)})