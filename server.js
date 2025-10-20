import express from "express";
import dotenv from "dotenv";
import petsRoutes from "./src/routes/petsRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("servidor funcionando");
});

app.use('/api', petsRoutes);

app.listen(serverPort, () => {
  console.log(`servidor rodando em http://localhost:${serverPort}`);
});
