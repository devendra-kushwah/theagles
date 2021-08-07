import express from "express";

import { authUser } from "./middleware";
import userController from "./modules/users/controllers/user";
import post from "./modules/posts/controllers/post";

const router = express.Router();

router.post("/user/signup", userController.create);
router.post("/user/signin", userController.read);

router.post("/user/post/create", authUser, post.create);
router.get("/user/post", authUser, post.read);
router.get("/users/all-posts", post.allPost);

// router.put("user/post/update", authUser, post.update);
// router.delete("user/post/delete", authUser, post.delete);

// router.get("user/profile", authUser, post.read);

export default router;
