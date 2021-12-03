import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
    async create(post, avatar) {
        const fileName = FileService.saveFile(avatar);
        const createdPost = await Post.create({...post, avatar: fileName})
        return createdPost;
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: "Id don't indicated"})
            }
            const post = await Post.findById(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(post) {
        if (!post._id) {
            res.status(400).json({message: "Id don't indicated"})
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: "Id don't indicated"})
            }
            const post = await Post.findByIdAndDelete(id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostService;