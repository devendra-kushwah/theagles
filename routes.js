import express from "express";
import authUser from "./auth/auth";
import controller from "./controller/userController";
import post from "./controller/post";

const router = express.Router();

// router.get("/login", controller.create)
// router.post("/login", controller.read)
// router.put("/login", controller.update)

router.post("/user/signup", controller.create);
router.post("/user/signin", controller.read);

router.post("/user/post/create", authUser, post.create);
// router.put("user/post/update", authUser, post.update);
// router.delete("user/post/delete", authUser, post.delete);
// router.get("user/posts", authUser, post.read);

// router.get("user/profile", authUser, post.read);

export default router;
