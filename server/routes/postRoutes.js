import express from "express";
import { createPost, deletePost, getPost, likeUnlikePost, replayToPost , getFeedPosts} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get('/feed', protectRoute, getFeedPosts)
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete('/:id', protectRoute, deletePost);
router.post('/like/:id',protectRoute, likeUnlikePost);
router.post('/replay/:id', protectRoute , replayToPost)

export default router;
