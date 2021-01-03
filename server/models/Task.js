const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    //maybe need type ObjectId
    links: [{ type: mongoose.Types.ObjectId, ref: "Link" }],
    userId: { type: String, required: true },
    task: { type: String, required: true },
    time: { type: Date, default: new Date() },
  },
  { timestamps: true }
);
module.exports = mongoose.model("tasks", schema);
