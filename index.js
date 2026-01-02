import express from "express";
import multer from "multer";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());

let serverStatus = {
  online: false,
  ram: { used: 0, total: 2 },
  disk: { used: 0, total: 50 }
};

app.get("/", (req, res) => {
  res.send("API FUNCIONANDO");
});

app.post("/update-status", (req, res) => {
  serverStatus = req.body;
  res.json({ ok: true });
});

app.get("/status", (req, res) => {
  res.json(serverStatus);
});

app.post("/upload-map", upload.single("map"), (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Rodando...");
});
