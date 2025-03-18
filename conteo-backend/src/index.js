import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/index.js";

const app = express();

app.listen("5001", () => {
  console.log("Servidor corriendo en el puerto 5001");
});

mongoose.connect(
  "mongodb+srv://yicelagutierrezguillen:hJgcvttOcvANecT8@conteo.t6snv.mongodb.net/?retryWrites=true&w=majority&appName=conteo"
);
console.log("Connected to MongoDB");

app.use(express.json());
app.use(cors());

app.use("/api", router);
