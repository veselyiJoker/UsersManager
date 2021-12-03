import { Router } from "express";
import PostsController from "./PostsController.js";


const router = new Router()

router.post('/users', PostsController.create)
router.get('/users', PostsController.getAll)
router.get('/users/:id', PostsController.getOne)
router.put('/users', PostsController.update)
router.delete('/users/:id', PostsController.delete)

export default router;
