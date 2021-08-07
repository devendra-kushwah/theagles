import PostModel from "../models/post";
import UserPosts from "../services/post";
import baseHelper from "../../../utils/status";

class Post {
  /**
   * @desc  Creates user story with media
   * @param req
   * @param res
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

  /**
   * @desc  Get user post
   * @param  req
   * @param  res
   * @return
   */
  async read(req, res) {
    try {
      const { title, description, media, subject } = req.body;
      // if (!title || !description || !subject) {
      //   const error = "Required fields";
      //   return baseHelper.error(res, error);
      // }
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


  /**
 * @desc  Update user post
 * @param  req
 * @param  res
 * @return updated post
 */

  async update(req, res) {
    try {
    } catch (error) { }
  }

  /**
   * @desc  Get all users post
   * @param  req
   * @param  res
   * @return all users post
   */

  async allPost(req, res) {
    try {
      const response = await PostModel.find().populate(
        "author",
        "_id email name"
      );
      return baseHelper.success(res, response);
    } catch (error) {
      return baseHelper.error(res, error);
    }
  }
}

export default new Post();
