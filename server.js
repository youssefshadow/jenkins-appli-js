const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "mon-app")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "mon-app", "index.html"));
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
