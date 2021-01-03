const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmed: { type: Boolean, required: true },
  confirmHash: { type: String, required: true },
  links: [{ type: mongoose.Types.ObjectId, ref: "Link" }],
});
module.exports = mongoose.model("allusers", schema);
