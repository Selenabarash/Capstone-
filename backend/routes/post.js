import express from "express";
import Post from "../models/post.js"

const router = express.Router();

router.get('/', (req, res) => {
res.send('Hello from Post')
})

export default router

