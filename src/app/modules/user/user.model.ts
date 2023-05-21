import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  contactNumber: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
});

// statics
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
  console.log("Inside Model: ",admins);
  return admins;
});

// instance method
userSchema.method("fullName", function fullName() {
  return `${this.name.firstName} ${this.name.lastName}`;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
