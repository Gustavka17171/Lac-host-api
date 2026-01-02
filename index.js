import express from "express";
import os from "os";

const app = express();
const PORT = process.env.PORT || 3000;

// ROTA DE STATUS (RAM / DISCO)
app.get("/status", (req, res) => {
  const ramTotal = os.totalmem() / 1024 / 1024;
  const ramFree = os.freemem() / 1024 / 1024;
  const ramUsed = ramTotal - ramFree;

  res.json({
    ramUsed: Math.round(ramUsed),   // MB
    ramTotal: Math.round(ramTotal), // MB
    diskUsed: 12,                   // GB (simulado)
    diskTotal: 50                   // GB
  });
});

// TESTE SIMPLES (opcional)
app.get("/", (req, res) => {
  res.send("API LAC HOST ONLINE");
});

app.listen(PORT, () => {
  console.log("API rodando na porta", PORT);
});
