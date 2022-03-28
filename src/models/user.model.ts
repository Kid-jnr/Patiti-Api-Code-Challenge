
// User Model
import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    consents: {type: Array, required: false}
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
