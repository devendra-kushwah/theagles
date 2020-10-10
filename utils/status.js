class Helper {
  success(res, data, status = 200) {
    return res.status(status).json({ status: "ok", data: data });
  }
  error(res, error, status = 400) {
    return res.status(status).json({ error: error });
  }
}
module.exports = new Helper();
