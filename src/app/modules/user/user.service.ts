import { IUser } from "./user.interface";
import User from "./user.model";

// A Service for each route
export const createUserToDB = async (data: IUser): Promise<IUser> => {
  const user = new User(data);

  await user.save(); // built-in instance method
  console.log(user.fullName()); // custom instance method
  console.log({ user });
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload });
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  console.log("Inside service: ",admins);
  return admins;
};

/* 
    {
    id: "775",
    role: "student",
    password: "Abcdef",
    name: {
      firstName: "Dipta1",
      lastName: "Sikder",
    },
    dateOfBirth: "1/1/2015",
    gender: "male",
    email: "test@gmail.com",
    contactNumber: "0177777777777",
    emergencyContactNo: "0123456",
    presentAddress: "Dhaka1",
    permanentAddress: "Dhaka1",
  }
*/
