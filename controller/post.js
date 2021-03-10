import Post from "../models/post";

import PostService from "../services/post";

class TimeLinePost {
  async create(req, res) {
    try {
      const { postStory, postMedia } = req.body;
      if (!postStory || !postMedia) {
        return res.status(422).json({ "error : ": " Required fields" });
      }
      const user = await Post.find({ "author.id :": req.user.id });
      if (!user) {
        return res.status(422).json({ "error : ": "invalid data provided" });
      }
      const response = await PostService(user);
      return res.status(200).json({ message: response });
    } catch (error) {
      console.log("Error : ", error);
    }
  }
}

export default new TimeLinePost();
