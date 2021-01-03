class createError extends Error {
  constructor({ name = "DEFAULT_ERROR", status = 500, message = "" }) {
    super(message);
    this.name = name;
    this.status = status;
  }
}
module.exports = createError;
