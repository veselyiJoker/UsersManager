import Post from "./Post.js";
import PostService from "./PostService.js";

class PostsController {
    async create(req, res) {
        try {
            console.log(req.files);
            const users = await PostService.create(req.body, req.files.avatar)
            res.json(users)
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {

            const {page = 1, limit = 6} = req.query

            const total = (await Post.find()).length;
            const totalPages = Math.ceil(total / limit);
            const data = await Post.find().limit(limit).skip((page - 1) * limit)
            
            const users = {
                page: page,
                per_page: limit,
                total: total,
                total_pages: totalPages,
                data: data,
            } 
            return res.json(users);
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
            const users = await Post.findById(id)
            return res.json(users)
        } catch (e) {
           res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const user = req.body
            if (!user._id) {
                res.status(400).json({message: "Id don't indicated"})
            }
            const updatedPost = await Post.findByIdAndUpdate(user._id, user, {new: true})
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: "Id don't indicated"})
            }
            const user = await Post.findByIdAndDelete(id);
            return res.json(user) 
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new PostsController();