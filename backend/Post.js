import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String},
    avatar: {type: String},
    updatedAt: {type: String}
})

export default mongoose.model('Post', Post)