const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    time: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post;