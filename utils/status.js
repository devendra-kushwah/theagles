class Helper {
  success(res, data, status = 200) {
    return res.status(status).json({ status: "ok", data });
  }
  error(res, error, status = 400) {
    return res.status(status).json({ error: error });
  }
}
export default new Helper();
