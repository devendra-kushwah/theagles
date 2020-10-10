import User from "../models/user";

class UserService {
  async create(data) {
    try {
      const response = await data.save();
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  }
  // async read(user){
  // const user = User.findOne({email: user.email}, )
  // }
}
module.exports = new UserService();
