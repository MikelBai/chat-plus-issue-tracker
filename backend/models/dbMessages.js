import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

const roomSchema = mongoose.Schema({
  title: String,
  messages: [messageSchema],
});

export default mongoose.model("room", roomSchema);
