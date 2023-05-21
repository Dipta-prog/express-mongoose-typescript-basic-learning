import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "admin" | "student";
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNumber: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// Statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

// Instance Method's Interface
export interface IUserMethods {
  fullName(): string;
}
