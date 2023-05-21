import mongoose from "mongoose";
import app from "./app";
const port: number = Number(process.env.PORT || 5000);

const run = async (): Promise<void> => {
  try {
    // This is Mongodb compass connection string(when localhost fails replace localhost with 127.0.0.1).
    //mongodb://127.0.0.1:27017/practice
    await mongoose.connect("mongodb://127.0.0.1:27017/test-mongoose");
    app.listen(port, () => {
      console.log(`server is running at port ${port}`);
    });
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log(`Failed to connect db ${error}`);
  }
};
run();
