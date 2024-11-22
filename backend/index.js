import express from "express"
import postRouter from "./routes/post.js"
import userRouter from './routes/user.js'
import dotenv from 'dotenv'
import { connect } from './db/connect.js';
import morgan from 'morgan';
import cors from 'cors';


dotenv.config();
connect();


const PORT = process.env.PORT || 4000
const app = express()

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/api/post', postRouter)
app.use('/api/user', userRouter)

app.get("/", (req, res) => {
res.send('Welcome To My API')
})






app.listen(PORT,() => {
    console.log(`Server is running on PORT: ${PORT}`)
})