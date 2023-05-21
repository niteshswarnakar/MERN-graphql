import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "../schema/schema.js";
import colors from "colors";
import connectDB from "./config/db.js";
import { connect } from "mongoose";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log("node_env - ", process.env.NODE_ENV);
  console.log(`server is running on the port:${PORT}`);
});
