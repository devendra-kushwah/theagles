import PostModel from "../models/post";
import UserPosts from "../services/post";
import baseHelper from "../utils/status.js";

class Post {
  /**
   * @desc  Create user story with media
   * @param {*} req
   * @param {*} res
   * @return user post response by (auth users id)
   */
  async create(req, res) {
    try {
      const { title, description, media, subject } = req.body;
      if (!title || !description || !subject) {
        const error = "Required fields";
        return baseHelper.error(res, error);
      }
      const post = new PostModel({
        title,
        description,
        media,
        subject,
        author: req.user,
      });
      const response = await UserPosts.create(post);
      return baseHelper.success(res, response);
    } catch (error) {
      console.log("Error : ", error);
    }
  }
}

export default new Post();
