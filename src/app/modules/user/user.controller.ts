import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";
import { IUser } from "./user.interface";

// A controller for each route
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: IUser = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
  next();
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
  next();
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params || {};
  const user = await getUserByIdFromDB(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
  next();
};

export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getAdminUsersFromDB();
  console.log("hitted from getAdminUsers");
  res.status(200).json({
    status: "success",
    data: users,
  });
};
