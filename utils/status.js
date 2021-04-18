class Helper {
  success(res, data, status = 200) {
    return res.status(status).json({ status: "ok", data, error: null });
  }
  error(res, error, status = 200) {
    return res
      .status(status)
      .json({ status: "error", error: error, data: null });
  }
}
export default new Helper();
