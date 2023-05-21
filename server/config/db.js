import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(
    `mongo db connected : ${connection.connection.host}`.cyan.underline.bold
  );
};

export default connectDB;
