import express from "express";
import { authUser } from "./middleware";
import user from "./controller/user";
import post from "./controller/post";

const router = express.Router();

router.post("/user/signup", user.create);
router.post("/user/signin", user.read);

router.post("/user/post/create", authUser, post.create);
router.get("/user/post", authUser, post.read);
router.get("/users/all-posts", post.allPost);
// router.put("user/post/update", authUser, post.update);
// router.delete("user/post/delete", authUser, post.delete);

// router.get("user/profile", authUser, post.read);

export default router;
