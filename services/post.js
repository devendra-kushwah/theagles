class UserPosts {
  async create(data) {
    try {
      const response = data.save();
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  }
}

export default new UserPosts();
