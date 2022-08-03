import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requied: true,
    minlength: 6,
  },
  role: {
    type: String,
    default: "user",
  },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", requied: true }],
});
export default mongoose.model("User", userSchema);
//users
