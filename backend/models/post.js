import mongoose, { mongo } from "mongoose"

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: [{content: String}]
})

export default mongoose.model('post', postSchema)

