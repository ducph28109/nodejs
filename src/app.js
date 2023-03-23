import express from "express"
import mongoose from "mongoose"
import routerProducts from "./router/products"
const app = express()
app.use(express.json());
app.use("/api",routerProducts);
export const  viteNodeApp = app;

mongoose.connect(`mongodb://127.0.0.1:27017/thithu`)