import cors from "cors";
import userRoutes from "./app/modules/user/user.route";
import express, { Application } from "express";
const app: Application = express();

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* user routes subscribe */
app.use("/api/v1/user", userRoutes);

export default app;
