import express from "express";
// import authUser from "./auth/auth";
const router = express.Router();

import controller from "./controller/userController";
// import post from "./controller/post";

// router.get("/login", controller.create)
// router.post("/login", controller.read)
// router.put("/login", controller.update)

router.post("/signup", controller.create);
router.post("/signin", controller.read);

// router.get('/post', authUser, postController.create)

export default router;
